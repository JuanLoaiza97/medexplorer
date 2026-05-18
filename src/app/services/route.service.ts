import {
  Injectable
} from '@angular/core';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import {
  environment
} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(
    private http: HttpClient
  ) {}

  getRoute(

    startLng: number,
    startLat: number,

    endLng: number,
    endLat: number,

    profile: string

  ) {

    const url =
      `https://api.openrouteservice.org/v2/directions/${profile}/geojson`;

    const body = {

      coordinates: [

        [startLng, startLat],

        [endLng, endLat]
      ]
    };

    const headers =
      new HttpHeaders({

        Authorization:
          environment.openRouteApiKey,

        'Content-Type':
          'application/json'
      });

    return this.http.post(
      url,
      body,
      { headers }
    );
  }
}
