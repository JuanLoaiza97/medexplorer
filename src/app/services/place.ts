import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {

  private selectedPlace = new BehaviorSubject<any>(null);

  place$ = this.selectedPlace.asObservable();

  setPlace(place: any) {
    this.selectedPlace.next(place);
  }
}
