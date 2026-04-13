import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceService } from '../../services/place';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-place-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './place-detail.html',
  styleUrl: './place-detail.scss'
})
export class PlaceDetailComponent {

  private placeService = inject(PlaceService);

  place$ = this.placeService.place$;

  isFavorite = false;
  stars = [1, 2, 3, 4, 5];

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
