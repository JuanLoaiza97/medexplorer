// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class PlaceService {

//   private selectedPlace = new BehaviorSubject<any>(null);

//   place$ = this.selectedPlace.asObservable();

//   setPlace(place: any) {
//     this.selectedPlace.next(place);
//   }
// }


import { Injectable } from '@angular/core';

import {
  BehaviorSubject
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {

  private selectedPlace =
    new BehaviorSubject<any>(null);

  place$ =
    this.selectedPlace.asObservable();

  constructor() {

    const savedPlace =
      localStorage.getItem('selectedPlace');

    if (savedPlace) {

      this.selectedPlace.next(
        JSON.parse(savedPlace)
      );
    }
  }

  setPlace(place: any) {

    localStorage.setItem(
      'selectedPlace',
      JSON.stringify(place)
    );

    this.selectedPlace.next(place);
  }

  clearPlace() {

    localStorage.removeItem(
      'selectedPlace'
    );

    this.selectedPlace.next(null);
  }
}
