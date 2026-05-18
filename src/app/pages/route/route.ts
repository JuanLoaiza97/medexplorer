// import {
//   Component,
//   AfterViewInit,
//   inject,
//   ChangeDetectorRef
// } from '@angular/core';

// import {
//   CommonModule
// } from '@angular/common';

// import * as L from 'leaflet';

// import {
//   HttpClient
// } from '@angular/common/http';

// import {
//   environment
// } from '../../../environments/environment';

// @Component({
//   selector: 'app-route',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './route.html',
//   styleUrl: './route.scss'
// })
// export class RouteComponent
// implements AfterViewInit {

//   // =========================================
//   // ✅ INJECTS
//   // =========================================

//   private http =
//     inject(HttpClient);

//   private cdr =
//     inject(ChangeDetectorRef);

//   // =========================================
//   // ✅ MAP
//   // =========================================

//   map!: L.Map;

//   currentPlace: any;

//   userLat!: number;
//   userLng!: number;

//   // =========================================
//   // ✅ INFO
//   // =========================================

//   distance = '';
//   duration = '';

//   loading = false;

//   // =========================================
//   // ✅ MODE
//   // =========================================

//   travelMode =
//     'driving-car';

//   // =========================================
//   // ✅ API
//   // =========================================

//   private apiKey =
//     environment.openRouteApiKey;

//   // =========================================
//   // ✅ MAP ELEMENTS
//   // =========================================

//   private routeLine?: L.Polyline;

//   private userMarker?: L.Marker;

//   private destinationMarker?: L.Marker;

//   // =========================================
//   // ✅ CUSTOM ICON
//   // =========================================

//   private customIcon = L.icon({

//     iconUrl:
//       'assets/logo_img.png',

//     iconSize:
//       [45, 45],

//     iconAnchor:
//       [22, 45],

//     popupAnchor:
//       [0, -40]
//   });

//   // =========================================
//   // ✅ INIT
//   // =========================================

//   ngAfterViewInit(): void {

//     this.currentPlace =
//       JSON.parse(
//         localStorage.getItem(
//           'selectedPlace'
//         ) || '{}'
//       );

//     this.initMap();
//   }

//   // =========================================
//   // ✅ INIT MAP
//   // =========================================

//   initMap() {

//     this.map = L.map('route-map')
//       .setView(
//         [6.2442, -75.5812],
//         13
//       );

//     L.tileLayer(
//       'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//       {
//         attribution:
//           '&copy; OpenStreetMap contributors'
//       }
//     ).addTo(this.map);

//     navigator.geolocation
//       .getCurrentPosition(

//         (position) => {

//           this.userLat =
//             position.coords.latitude;

//           this.userLng =
//             position.coords.longitude;

//           this.createRoute();
//         },

//         (error) => {

//           console.error(error);

//           alert(
//             'No pudimos obtener tu ubicación'
//           );
//         }
//       );
//   }

//   // =========================================
//   // ✅ CREATE ROUTE
//   // =========================================

//   createRoute() {

//     // ✅ EVITAR MULTI REQUESTS
//     if (this.loading) {
//       return;
//     }

//     this.loading = true;

//     // ✅ REFRESH UI
//     this.cdr.detectChanges();

//     // ✅ LIMPIAR ANTES
//     this.clearRoute();

//     const start =
//       `${this.userLng},${this.userLat}`;

//     const end =
//       `${this.currentPlace.lng},${this.currentPlace.lat}`;

//     const url =
//       `https://api.openrouteservice.org/v2/directions/${this.travelMode}?api_key=${this.apiKey}&start=${start}&end=${end}`;

//     this.http.get(url)
//       .subscribe({

//         next: (response: any) => {

//           const route =
//             response.features[0];

//           const coords =
//             route.geometry.coordinates;

//           const summary =
//             route.properties.summary;

//           // =====================================
//           // DISTANCE
//           // =====================================

//           this.distance =
//             (
//               summary.distance / 1000
//             ).toFixed(1) + ' km';

//           // =====================================
//           // DURATION
//           // =====================================

//           this.duration =
//             Math.round(
//               summary.duration / 60
//             ) + ' min';

//           // =====================================
//           // COORDS
//           // =====================================

//           const latlngs =
//             coords.map(
//               (c: any) => [
//                 c[1],
//                 c[0]
//               ]
//             );

//           // =====================================
//           // USER MARKER
//           // =====================================

//           this.userMarker =
//             L.marker(
//               [
//                 this.userLat,
//                 this.userLng
//               ],
//               {
//                 icon:
//                   this.customIcon
//               }
//             )
//             .addTo(this.map)
//             .bindPopup(
//               'Tu ubicación'
//             );

//           // =====================================
//           // DESTINATION MARKER
//           // =====================================

//           this.destinationMarker =
//             L.marker(
//               [
//                 this.currentPlace.lat,
//                 this.currentPlace.lng
//               ],
//               {
//                 icon:
//                   this.customIcon
//               }
//             )
//             .addTo(this.map)
//             .bindPopup(
//               this.currentPlace.name
//             );

//           // =====================================
//           // ROUTE
//           // =====================================

//           this.routeLine =
//             L.polyline(
//               latlngs,
//               {
//                 color: '#14b8a6',
//                 weight: 7
//               }
//             )
//             .addTo(this.map);

//           // =====================================
//           // FIT MAP
//           // =====================================

//           this.map.fitBounds(
//             this.routeLine.getBounds(),
//             {
//               padding: [60, 60]
//             }
//           );

//           // =====================================
//           // FINISH
//           // =====================================

//           this.loading = false;

//           // ✅ FORZAR REFRESH
//           this.cdr.detectChanges();
//         },

//         error: (error) => {

//           console.error(
//             'ERROR RUTA:',
//             error
//           );

//           this.loading = false;

//           this.cdr.detectChanges();
//         }
//       });
//   }

//   // =========================================
//   // ✅ CLEAR ROUTE
//   // =========================================

//   clearRoute() {

//     if (this.routeLine) {

//       this.map.removeLayer(
//         this.routeLine
//       );
//     }

//     if (this.userMarker) {

//       this.map.removeLayer(
//         this.userMarker
//       );
//     }

//     if (this.destinationMarker) {

//       this.map.removeLayer(
//         this.destinationMarker
//       );
//     }
//   }

//   // =========================================
//   // ✅ CHANGE MODE
//   // =========================================

//   changeMode(mode: string) {

//     // ✅ SI YA ESTÁ ACTIVO
//     if (
//       this.travelMode === mode
//     ) {
//       return;
//     }

//     // ✅ SI ESTÁ CARGANDO
//     if (this.loading) {
//       return;
//     }

//     this.travelMode = mode;

//     // ✅ LIMPIAR DATOS VIEJOS
//     this.distance = '...';
//     this.duration = '...';

//     // ✅ REFRESH
//     this.cdr.detectChanges();

//     this.createRoute();
//   }

//   // =========================================
//   // ✅ GOOGLE MAPS
//   // =========================================

//   openGoogleMaps() {

//     const url =
//       `https://www.google.com/maps/dir/?api=1&destination=${this.currentPlace.lat},${this.currentPlace.lng}`;

//     window.open(
//       url,
//       '_blank'
//     );
//   }
// }

import {
  Component,
  AfterViewInit,
  inject,
  ChangeDetectorRef
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

import {
  AuthService
} from '../../services/auth.service';

import {
  UserService
} from '../../services/user.service';

@Component({
  selector: 'app-route',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route.html',
  styleUrl: './route.scss'
})
export class RouteComponent
implements AfterViewInit {

  // =========================================
  // INJECTS
  // =========================================

  private http =
    inject(HttpClient);

  private cdr =
    inject(ChangeDetectorRef);

  private authService =
    inject(AuthService);

  private userService =
    inject(UserService);

  // =========================================
  // MAP
  // =========================================

  map!: L.Map;

  currentPlace: any;

  userLat!: number;
  userLng!: number;

  // =========================================
  // INFO
  // =========================================

  distance = '';
  duration = '';

  loading = false;

  // =========================================
  // MODE
  // =========================================

  travelMode =
    'driving-car';

  // =========================================
  // API
  // =========================================

  private apiKey =
    environment.openRouteApiKey;

  // =========================================
  // MAP ELEMENTS
  // =========================================

  private routeLine?: L.Polyline;

  private userMarker?: L.Marker;

  private destinationMarker?: L.Marker;

  // =========================================
  // CUSTOM ICON
  // =========================================

  private customIcon = L.icon({

    iconUrl:
      'assets/logo_img.png',

    iconSize:
      [45, 45],

    iconAnchor:
      [22, 45],

    popupAnchor:
      [0, -40]
  });

  // =========================================
  // INIT
  // =========================================

  async ngAfterViewInit(): Promise<void> {

    this.currentPlace =
      JSON.parse(
        localStorage.getItem(
          'selectedPlace'
        ) || '{}'
      );

    await this.saveVisitedPlace();

    this.initMap();
  }

  // =========================================
  // SAVE VISITED PLACE
  // =========================================

  async saveVisitedPlace() {

    const user =
      this.authService
        .getCurrentUser();

    if (!user) return;

    try {

      await this.userService
        .addVisitedPlace(
          user.uid,
          this.currentPlace
        );

      console.log(
        '✅ Lugar visitado guardado'
      );

    } catch(error) {

      console.error(
        '🔥 ERROR VISITED:',
        error
      );
    }
  }

  // =========================================
  // INIT MAP
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
  // CREATE ROUTE
  // =========================================

  createRoute() {

    if (this.loading) {
      return;
    }

    this.loading = true;

    this.cdr.detectChanges();

    this.clearRoute();

    const start =
      `${this.userLng},${this.userLat}`;

    const end =
      `${this.currentPlace.lng},${this.currentPlace.lat}`;

    const url =
      `https://api.openrouteservice.org/v2/directions/${this.travelMode}?api_key=${this.apiKey}&start=${start}&end=${end}`;

    this.http.get(url)
      .subscribe({

        next: (response: any) => {

          const route =
            response.features[0];

          const coords =
            route.geometry.coordinates;

          const summary =
            route.properties.summary;

          this.distance =
            (
              summary.distance / 1000
            ).toFixed(1) + ' km';

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

          this.userMarker =
            L.marker(
              [
                this.userLat,
                this.userLng
              ],
              {
                icon:
                  this.customIcon
              }
            )
            .addTo(this.map)
            .bindPopup(
              'Tu ubicación'
            );

          this.destinationMarker =
            L.marker(
              [
                this.currentPlace.lat,
                this.currentPlace.lng
              ],
              {
                icon:
                  this.customIcon
              }
            )
            .addTo(this.map)
            .bindPopup(
              this.currentPlace.name
            );

          this.routeLine =
            L.polyline(
              latlngs,
              {
                color: '#14b8a6',
                weight: 7
              }
            )
            .addTo(this.map);

          this.map.fitBounds(
            this.routeLine.getBounds(),
            {
              padding: [60, 60]
            }
          );

          this.loading = false;

          this.cdr.detectChanges();
        },

        error: (error) => {

          console.error(
            'ERROR RUTA:',
            error
          );

          this.loading = false;

          this.cdr.detectChanges();
        }
      });
  }

  // =========================================
  // CLEAR ROUTE
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
  // CHANGE MODE
  // =========================================

  changeMode(mode: string) {

    if (
      this.travelMode === mode
    ) {
      return;
    }

    if (this.loading) {
      return;
    }

    this.travelMode = mode;

    this.distance = '...';
    this.duration = '...';

    this.cdr.detectChanges();

    this.createRoute();
  }

  // =========================================
  // GOOGLE MAPS
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
