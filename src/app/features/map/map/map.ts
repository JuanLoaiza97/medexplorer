import {
  Component,
  AfterViewInit,
  NgZone,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { PlacesService } from '../../../services/places';
import { PlaceService } from '../../../services/place';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class MapComponent implements AfterViewInit, OnChanges {

  @Input() filter: string | null = null;
  @Input() search: string = '';

  map!: L.Map;
  markers: L.Marker[] = [];
  places: any[] = [];

  // 🔥 NUEVO
  noResults: boolean = false;

  constructor(
    private placesService: PlacesService,
    private placeService: PlaceService,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit(): void {
    this.places = this.placesService.getPlaces();
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.map) {
      this.applyFilters();
    }
  }

  initMap(): void {
    this.map = L.map('map').setView([6.2442, -75.5812], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.loadMarkers(this.places);
  }

  // 🔥 FILTRO + BUSCADOR
  applyFilters(): void {

    let filteredPlaces = this.places;

    // 🎯 FILTRO POR TAG
    if (this.filter) {
      filteredPlaces = filteredPlaces.filter(place =>
        place.tags?.includes(this.filter!)
      );
    }

    // 🔍 FILTRO POR TEXTO
    if (this.search.trim()) {
      const term = this.search.toLowerCase();

      filteredPlaces = filteredPlaces.filter(place =>
        place.name.toLowerCase().includes(term) ||
        place.description.toLowerCase().includes(term) ||
        place.tags?.some((tag: string) =>
          tag.toLowerCase().includes(term)
        )
      );
    }

    // 🚨 VALIDAR RESULTADOS (UX PRO)
    this.noResults =
      filteredPlaces.length === 0 &&
      (this.search.trim().length > 0 || this.filter !== null);

    this.clearMarkers();

    if (!this.noResults) {
      this.loadMarkers(filteredPlaces);
    }
  }

  clearMarkers(): void {
    this.markers.forEach(marker => {
      this.map.removeLayer(marker);
    });
    this.markers = [];
  }

  loadMarkers(places: any[]): void {

    const customIcon = L.icon({
      iconUrl: 'assets/logo_img.png',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -35]
    });

    places.forEach(place => {

      const marker = L.marker([place.lat, place.lng], {
        icon: customIcon
      }).addTo(this.map);

      marker.bindPopup(`<b>${place.name}</b>`);

      marker.on('click', () => {
        this.ngZone.run(() => {

          this.map.setView([place.lat, place.lng], 15, {
            animate: true
          });

          this.placeService.setPlace(place);

        });
      });

      this.markers.push(marker);
    });
  }
}
