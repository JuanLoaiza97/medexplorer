// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-place-panel',
//   imports: [],
//   templateUrl: './place-panel.html',
//   styleUrl: './place-panel.scss',
// })
// export class PlacePanel {}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './place-panel.html',
  styleUrl: './place-panel.scss'
})
export class PlacePanelComponent {

  place = {
    name: 'Comuna 13',
    location: 'Medellín',
    image: 'assets/comuna13.jpg',
    rating: 4.8,
    description: 'Uno de los lugares más turísticos de Medellín...',
    comments: [
      { user: 'Juan', text: 'Increíble lugar 🔥' },
      { user: 'Ana', text: 'Muy recomendado' }
    ]
  };

  stars = [1, 2, 3, 4, 5];

  toggleFavorite() {
    console.log('Favorito!');
  }
}
