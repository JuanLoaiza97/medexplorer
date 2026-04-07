import { Component, AfterViewInit, NgZone } from '@angular/core';
import * as L from 'leaflet';
import { PlacesService } from '../../../services/places';
import { PlaceService } from '../../../services/place';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.html',
  styleUrl: './map.scss'
})
export class MapComponent implements AfterViewInit {

  map!: L.Map;
  markers: L.Marker[] = [];
  places: any[] = [];

  constructor(
    private placesService: PlacesService,
    private placeService: PlaceService,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit(): void {
    this.places = this.placesService.getPlaces();
    this.initMap();
  }

  initMap(): void {
    this.map = L.map('map').setView([6.2442, -75.5812], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.loadMarkers(this.places);
  }

  loadMarkers(places: any[]): void {

    // 🔥 ICONO PERSONALIZADO
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

        // 🔥 IMPORTANTE: Ejecutar dentro de Angular
        this.ngZone.run(() => {

          // Centrar mapa (UX PRO)
          this.map.setView([place.lat, place.lng], 15, {
            animate: true
          });

          // Enviar al panel (AHORA SÍ actualiza instantáneo)
          this.placeService.setPlace(place);

        });

      });

      this.markers.push(marker);
    });
  }
}
