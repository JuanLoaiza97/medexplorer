import {
  Component,
  inject,
  ChangeDetectorRef
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RouterModule
} from '@angular/router';

import {
  PlaceService
} from '../../../services/place';

import {
  FavoritesService
} from '../../../services/favorites.service';

@Component({
  selector: 'app-place-panel',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './place-panel.html',
  styleUrl: './place-panel.scss'
})
export class PlacePanelComponent {

  private placeService =
    inject(PlaceService);

  private favoritesService =
    inject(FavoritesService);

  private cdr =
    inject(ChangeDetectorRef);

  place$ =
    this.placeService.place$;

  stars = [1,2,3,4,5];

  currentPlace: any = null;

  isFavorite = false;

  constructor() {

    // ✅ PLACE
    this.place$.subscribe((place) => {

      this.currentPlace = place;

      this.updateFavoriteState();
    });

    // ✅ FAVORITOS
    this.favoritesService.favorites$
      .subscribe(() => {

        this.updateFavoriteState();
      });
  }

  // ✅ ACTUALIZAR ESTADO
  updateFavoriteState() {

    if (!this.currentPlace) {

      this.isFavorite = false;

      this.cdr.detectChanges();

      return;
    }

    const placeId =
      this.currentPlace.id ||
      this.currentPlace.placeId ||
      this.currentPlace.fsq_id;

    this.isFavorite =
      this.favoritesService.isFavorite(
        placeId
      );

    // 🔥 FORZAR RENDER
    this.cdr.detectChanges();
  }

  // ✅ TOGGLE
  async toggleFavorite() {

    console.log(
      'CLICK FAVORITO',
      this.currentPlace
    );

    if (!this.currentPlace) return;

    await this.favoritesService.toggleFavorite(
      this.currentPlace
    );

    this.updateFavoriteState();
  }
}
