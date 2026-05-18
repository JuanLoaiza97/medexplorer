import {
  Component,
  AfterViewInit,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import * as L from 'leaflet';

import {
  HttpClient
} from '@angular/common/http';

import {
  environment
} from '../../../environments/environment';

@Component({
  selector: 'app-route',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route.html',
  styleUrl: './route.scss'
})
export class RouteComponent
implements AfterViewInit {

  private http =
    inject(HttpClient);

  map!: L.Map;

  currentPlace: any;

  userLat!: number;
  userLng!: number;

  distance = '';
  duration = '';

  loading = false;

  travelMode =
    'driving-car';

  private apiKey =
    environment.openRouteApiKey;

  // ✅ NUEVO
  private routeLine?: L.Polyline;

  private userMarker?: L.Marker;

  private destinationMarker?: L.Marker;

  ngAfterViewInit(): void {

    this.currentPlace =
      JSON.parse(
        localStorage.getItem(
          'selectedPlace'
        ) || '{}'
      );

    this.initMap();
  }

  // =========================================
  // ✅ INIT MAP
  // =========================================

  initMap() {

    this.map = L.map('route-map')
      .setView(
        [6.2442, -75.5812],
        13
      );

    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution:
          '&copy; OpenStreetMap contributors'
      }
    ).addTo(this.map);

    navigator.geolocation
      .getCurrentPosition(
        (position) => {

          this.userLat =
            position.coords.latitude;

          this.userLng =
            position.coords.longitude;

          this.createRoute();
        },
        (error) => {

          console.error(error);

          alert(
            'No pudimos obtener tu ubicación'
          );
        }
      );
  }

  // =========================================
  // ✅ CREATE ROUTE
  // =========================================

  createRoute() {

    this.loading = true;

    const start =
      `${this.userLng},${this.userLat}`;

    const end =
      `${this.currentPlace.lng},${this.currentPlace.lat}`;

    const url =
      `https://api.openrouteservice.org/v2/directions/${this.travelMode}?api_key=${this.apiKey}&start=${start}&end=${end}`;

    this.http.get(url)
      .subscribe({

        next: (response: any) => {

          // ✅ LIMPIAR ANTES
          this.clearRoute();

          const coords =
            response.features[0]
            .geometry.coordinates;

          const summary =
            response.features[0]
            .properties.summary;

          // ✅ DISTANCIA
          this.distance =
            (
              summary.distance / 1000
            ).toFixed(1) + ' km';

          // ✅ TIEMPO
          this.duration =
            Math.round(
              summary.duration / 60
            ) + ' min';

          const latlngs =
            coords.map(
              (c: any) => [
                c[1],
                c[0]
              ]
            );

          // =====================================
          // USER MARKER
          // =====================================

          this.userMarker =
            L.marker([
              this.userLat,
              this.userLng
            ])
            .addTo(this.map)
            .bindPopup('Tu ubicación');

          // =====================================
          // DESTINATION MARKER
          // =====================================

          this.destinationMarker =
            L.marker([
              this.currentPlace.lat,
              this.currentPlace.lng
            ])
            .addTo(this.map)
            .bindPopup(this.currentPlace.name);

          // =====================================
          // ROUTE LINE
          // =====================================

          this.routeLine =
            L.polyline(
              latlngs,
              {
                color: '#14b8a6',
                weight: 7
              }
            ).addTo(this.map);

          this.map.fitBounds(
            this.routeLine.getBounds(),
            {
              padding: [60, 60]
            }
          );

          this.loading = false;
        },

        error: (error) => {

          console.error(
            'ERROR RUTA:',
            error
          );

          this.loading = false;
        }
      });
  }

  // =========================================
  // ✅ LIMPIAR RUTA
  // =========================================

  clearRoute() {

    if (this.routeLine) {
      this.map.removeLayer(
        this.routeLine
      );
    }

    if (this.userMarker) {
      this.map.removeLayer(
        this.userMarker
      );
    }

    if (this.destinationMarker) {
      this.map.removeLayer(
        this.destinationMarker
      );
    }
  }

  // =========================================
  // ✅ CHANGE MODE
  // =========================================

  changeMode(mode: string) {

    // ✅ EVITAR CLICK REPETIDO
    if (
      this.travelMode === mode
    ) {
      return;
    }

    this.travelMode = mode;

    this.createRoute();
  }

  // =========================================
  // ✅ GOOGLE MAPS
  // =========================================

  openGoogleMaps() {

    const url =
      `https://www.google.com/maps/dir/?api=1&destination=${this.currentPlace.lat},${this.currentPlace.lng}`;

    window.open(
      url,
      '_blank'
    );
  }
}
