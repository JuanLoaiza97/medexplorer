// import {
//   Component,
//   inject,
//   ChangeDetectorRef
// } from '@angular/core';

// import {
//   CommonModule
// } from '@angular/common';

// import {
//   FormsModule
// } from '@angular/forms';

// import {
//   RouterModule
// } from '@angular/router';

// import {
//   PlaceService
// } from '../../services/place';

// import {
//   FavoritesService
// } from '../../services/favorites.service';

// @Component({
//   selector: 'app-place-detail',
//   standalone: true,
//   imports: [
//     CommonModule,
//     RouterModule,
//     FormsModule
//   ],
//   templateUrl: './place-detail.html',
//   styleUrl: './place-detail.scss'
// })
// export class PlaceDetailComponent {

//   private placeService =
//     inject(PlaceService);

//   private favoritesService =
//     inject(FavoritesService);

//   private cdr =
//     inject(ChangeDetectorRef);

//   place$ =
//     this.placeService.place$;

//   stars = [1,2,3,4,5];

//   currentPlace: any = null;

//   isFavorite = false;

//   // ✅ NUEVO
//   showCommentBox = false;

//   newComment = '';

//   selectedRating = 0;

//   constructor() {

//     // ✅ PLACE
//     this.place$.subscribe((place) => {

//       this.currentPlace = place;

//       this.updateFavoriteState();
//     });

//     // ✅ FAVORITOS
//     this.favoritesService.favorites$
//       .subscribe(() => {

//         this.updateFavoriteState();
//       });
//   }

//   // ✅ FAVORITO
//   updateFavoriteState() {

//     if (!this.currentPlace) {

//       this.isFavorite = false;

//       this.cdr.detectChanges();

//       return;
//     }

//     const placeId =
//       this.currentPlace.id ||
//       this.currentPlace.placeId ||
//       this.currentPlace.fsq_id;

//     this.isFavorite =
//       this.favoritesService.isFavorite(
//         placeId
//       );

//     this.cdr.detectChanges();
//   }

//   // ✅ TOGGLE FAVORITO
//   async toggleFavorite() {

//     if (!this.currentPlace) return;

//     await this.favoritesService.toggleFavorite(
//       this.currentPlace
//     );

//     this.updateFavoriteState();
//   }

//   // ✅ MOSTRAR FORMULARIO
//   toggleCommentBox() {

//     this.showCommentBox =
//       !this.showCommentBox;
//   }

//   // ✅ SELECCIONAR ESTRELLAS
//   setRating(star: number) {

//     this.selectedRating = star;
//   }

//   // ✅ PUBLICAR COMENTARIO
//   submitComment() {

//     if (
//       !this.newComment.trim() ||
//       this.selectedRating === 0
//     ) {
//       return;
//     }

//     // 🔥 SI NO EXISTE ARRAY
//     if (!this.currentPlace.comments) {

//       this.currentPlace.comments = [];
//     }

//     // ✅ AGREGAR COMENTARIO
//     this.currentPlace.comments.unshift({

//       user: 'Tú',

//       text: this.newComment,

//       rating: this.selectedRating,

//       date: new Date()
//         .toLocaleDateString()
//     });

//     // ✅ LIMPIAR
//     this.newComment = '';

//     this.selectedRating = 0;

//     this.showCommentBox = false;

//     this.cdr.detectChanges();
//   }
// }


import {
  Component,
  inject
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  RouterModule
} from '@angular/router';

import {
  PlaceService
} from '../../services/place';

import {
  FavoritesService
} from '../../services/favorites.service';

import {
  CommentsService
} from '../../services/comments.service';

import {
  AuthService
} from '../../services/auth.service';

@Component({
  selector: 'app-place-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './place-detail.html',
  styleUrl: './place-detail.scss'
})
export class PlaceDetailComponent {

  // ✅ SERVICES
  private placeService =
    inject(PlaceService);

  private favoritesService =
    inject(FavoritesService);

  private commentsService =
    inject(CommentsService);

  private authService =
    inject(AuthService);

  // ✅ PLACE
  place$ =
    this.placeService.place$;

  stars = [1,2,3,4,5];

  currentPlace: any = null;

  // ✅ FAVORITOS
  isFavorite = false;

  // ✅ COMMENTS
  comments: any[] = [];

  showCommentBox = false;

  newComment = '';

  selectedRating = 0;

  constructor() {

    // ✅ PLACE
    this.place$.subscribe((place) => {

      this.currentPlace = place;

      this.updateFavoriteState();

      this.loadComments();
    });

    // ✅ FAVORITOS
    this.favoritesService.favorites$
      .subscribe(() => {

        this.updateFavoriteState();
      });
  }

  // =========================================
  // ✅ FAVORITOS
  // =========================================

  updateFavoriteState() {

    if (!this.currentPlace) {

      this.isFavorite = false;
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
  }

  async toggleFavorite() {

    if (!this.currentPlace) return;

    await this.favoritesService.toggleFavorite(
      this.currentPlace
    );

    this.updateFavoriteState();
  }

  // =========================================
  // ✅ COMMENTS
  // =========================================

  toggleCommentBox() {

    this.showCommentBox =
      !this.showCommentBox;
  }

  setRating(star: number) {

    this.selectedRating = star;
  }

  // ✅ CARGAR COMMENTS
  loadComments() {

    if (!this.currentPlace) return;

    const placeId =
      this.currentPlace.id ||
      this.currentPlace.placeId ||
      this.currentPlace.fsq_id;

    this.commentsService
      .getComments(placeId)
      .subscribe((comments) => {

        this.comments = comments;
      });
  }

  // ✅ PUBLICAR COMMENT
  async submitComment() {

    // ✅ VALIDACIONES
    if (
      !this.newComment.trim() ||
      this.selectedRating === 0
    ) {
      return;
    }

    // ✅ USER
    const user =
      this.authService.getCurrentUser();

    if (!user) {

      alert('Debes iniciar sesión');
      return;
    }

    // ✅ PLACE ID
    const placeId =
      this.currentPlace.id ||
      this.currentPlace.placeId ||
      this.currentPlace.fsq_id;

    // ✅ GUARDAR FIREBASE
    await this.commentsService.addComment({

      placeId,

      userId: user.uid,

      user: user.name || user.email,

      text: this.newComment,

      rating: this.selectedRating,

      placeName: this.currentPlace.name,

      placeImage: this.currentPlace.image
    });

    // ✅ LIMPIAR
    this.newComment = '';

    this.selectedRating = 0;

    this.showCommentBox = false;
  }
}
