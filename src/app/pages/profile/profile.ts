
import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  NavbarComponent
} from '../../shared/navbar/navbar';

import {
  AuthService
} from '../../services/auth.service';

import {
  FavoritesService
} from '../../services/favorites.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class ProfileComponent
implements OnInit {

  user: any = null;

  loading = true;

  favoritePlaces: any[] = [];

  visitedPlaces: any[] = [];

  comments: any[] = [];

  constructor(
    private authService: AuthService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {

    // =====================================
    // USER
    // =====================================

    this.authService.user$
      .subscribe((user) => {

        this.user = user;

        if (!user) {

          this.loading = false;
          return;
        }

        // =====================================
        // VISITED PLACES
        // =====================================

        this.visitedPlaces =
          [...(user.visitedPlaces || [])]
            .sort(
              (a: any, b: any) =>
                new Date(
                  b.visitedAt
                ).getTime()
                -
                new Date(
                  a.visitedAt
                ).getTime()
            );

        // =====================================
        // COMMENTS
        // =====================================

        this.comments =
          [...(user.comments || [])]
            .sort(
              (a: any, b: any) =>
                new Date(
                  b.createdAt
                ).getTime()
                -
                new Date(
                  a.createdAt
                ).getTime()
            );

        this.loading = false;
      });

    // =====================================
    // FAVORITES
    // =====================================

    this.favoritesService.favorites$
      .subscribe((favorites) => {

        this.favoritePlaces =
          favorites || [];
      });
  }
}
