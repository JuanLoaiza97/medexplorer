// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { AuthService } from '../../services/auth.service';
// import { Firestore, doc, getDoc } from '@angular/fire/firestore';
// import { NavbarComponent } from '../../shared/navbar/navbar';

// @Component({
//   selector: 'app-profile',
//   standalone: true,
//   imports: [CommonModule, NavbarComponent],
//   templateUrl: './profile.html',
//   styleUrl: './profile.scss'
// })
// export class ProfileComponent implements OnInit {

//   user: any = null;
//   loading = true;

//   visitedPlaces: any[] = [];
//   favoritePlaces: any[] = [];
//   comments: any[] = [];

//   constructor(
//     private authService: AuthService,
//     private firestore: Firestore
//   ) {}

//   async ngOnInit() {

//     this.authService.user$.subscribe(async (user) => {

//       if (!user) {
//         this.loading = false;
//         return;
//       }

//       this.user = user;

//       const ref = doc(this.firestore, `users/${user.uid}`);
//       const snap = await getDoc(ref);

//       if (snap.exists()) {
//         const data = snap.data();

//         this.user = {
//           ...this.user,
//           ...data
//         };

//         // 🔥 MOCK DATA (hasta que conectes visitas reales)
//         this.visitedPlaces = data['visitedPlaces'] || [];
//         this.favoritePlaces = data['favorites'] || [];
//         this.comments = data['comments'] || [];
//       }

//       this.loading = false;
//     });
//   }
// }
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

    this.authService.user$
      .subscribe((user) => {

        this.user = user;

        if (!user) {

          this.loading = false;
          return;
        }

        this.visitedPlaces =
          user.visitedPlaces || [];

        this.comments =
          user.comments || [];

        this.loading = false;
      });

    this.favoritesService.favorites$
      .subscribe((favorites) => {

        this.favoritePlaces = favorites;
      });
  }
}
