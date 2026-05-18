import {
  Component,
  inject,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
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
  Subscription
} from 'rxjs';

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
export class PlaceDetailComponent
implements OnInit, OnDestroy {

  // =========================================
  // ✅ SERVICES
  // =========================================

  private placeService =
    inject(PlaceService);

  private favoritesService =
    inject(FavoritesService);

  private commentsService =
    inject(CommentsService);

  private authService =
    inject(AuthService);

  private cdr =
    inject(ChangeDetectorRef);

  // =========================================
  // ✅ PLACE
  // =========================================

  place$ =
    this.placeService.place$;

  currentPlace: any = null;

  stars = [1,2,3,4,5];

  // =========================================
  // ✅ FAVORITOS
  // =========================================

  isFavorite = false;

  // =========================================
  // ✅ COMMENTS
  // =========================================

  comments: any[] = [];

  averageRating = 0;

  reviewsCount = 0;

  showCommentBox = false;

  newComment = '';

  selectedRating = 0;

  private commentsSub?: Subscription;

  private placeSub?: Subscription;

  // =========================================
  // ✅ INIT
  // =========================================

  ngOnInit() {

    this.placeSub =
      this.place$
        .subscribe((place) => {

          if (!place) return;

          this.currentPlace = place;

          this.updateFavoriteState();

          this.loadComments();

          this.cdr.detectChanges();
        });

    this.favoritesService.favorites$
      .subscribe(() => {

        this.updateFavoriteState();

        this.cdr.detectChanges();
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

    this.cdr.detectChanges();
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

  // =========================================
  // ✅ LOAD COMMENTS
  // =========================================

  loadComments() {

    if (!this.currentPlace) return;

    this.commentsSub?.unsubscribe();

    const placeId =
      String(
        this.currentPlace.id ||
        this.currentPlace.placeId ||
        this.currentPlace.fsq_id
      );

    this.commentsSub =
      this.commentsService
        .getComments(placeId)
        .subscribe((comments) => {

          this.comments = [...comments];

          // ✅ TOTAL REVIEWS
          this.reviewsCount =
            comments.length;

          // ✅ PROMEDIO
          this.averageRating =
            this.commentsService
              .calculateAverageRating(
                comments
              );

          // ✅ ACTUALIZAR PLACE
          this.currentPlace.rating =
            this.averageRating ||
            this.currentPlace.rating;

          this.cdr.detectChanges();

          console.log(
            '⭐ PROMEDIO:',
            this.averageRating
          );

        });
  }

  // =========================================
  // ✅ PUBLICAR COMMENT
  // =========================================

  async submitComment(
    event?: Event
  ) {

    event?.preventDefault();

    event?.stopPropagation();

    if (
      !this.newComment.trim() ||
      this.selectedRating === 0
    ) {
      return;
    }

    const user =
      this.authService.getCurrentUser();

    if (!user) {

      alert(
        'Debes iniciar sesión'
      );

      return;
    }

    const placeId =
      String(
        this.currentPlace.id ||
        this.currentPlace.placeId ||
        this.currentPlace.fsq_id
      );

    try {

      await this.commentsService.addComment({

        placeId,

        userId:
          user.uid,

        user:
          user.name ||
          user.email,

        text:
          this.newComment,

        rating:
          this.selectedRating,

        placeName:
          this.currentPlace.name,

        placeImage:
          this.currentPlace.image
      });

      // ✅ LIMPIAR
      this.newComment = '';

      this.selectedRating = 0;

      this.showCommentBox = false;

      // 🔥 REFRESH UI
      this.cdr.detectChanges();

      console.log(
        '✅ COMMENT PUBLICADO'
      );

    } catch(error) {

      console.error(
        '🔥 ERROR COMMENT:',
        error
      );
    }
  }

  // =========================================
  // ✅ TRACK
  // =========================================

  trackComment(
    index: number,
    comment: any
  ) {
    return comment.id;
  }

  // =========================================
  // ✅ DESTROY
  // =========================================

  ngOnDestroy(): void {

    this.commentsSub?.unsubscribe();

    this.placeSub?.unsubscribe();
  }
}
