
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-place-panel',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './place-panel.html',
//   styleUrl: './place-panel.scss'
// })
// export class PlacePanelComponent {

//   place = {
//     name: 'Comuna 13',
//     location: 'Medellín',
//     image: 'assets/comuna13.jpg',
//     rating: 4.8,
//     description: 'Uno de los lugares más turísticos de Medellín...',
//     comments: [
//       { user: 'Juan', text: 'Increíble lugar 🔥' },
//       { user: 'Ana', text: 'Muy recomendado' }
//     ]
//   };

//   stars = [1, 2, 3, 4, 5];

//   toggleFavorite() {
//     console.log('Favorito!');
//   }
// }
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaceService } from '../../../services/place';

@Component({
  selector: 'app-place-panel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './place-panel.html',
  styleUrl: './place-panel.scss'
})
export class PlacePanelComponent {

  // ✅ Inyección moderna (NO constructor)
  private placeService = inject(PlaceService);

  // ✅ Observable directo
  place$ = this.placeService.place$;

  stars = [1, 2, 3, 4, 5];
  isFavorite = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
