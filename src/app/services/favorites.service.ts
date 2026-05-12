import {
  Injectable,
  inject,
  NgZone
} from '@angular/core';

import {
  Firestore,
  doc,
  setDoc,
  deleteDoc,
  collection,
  collectionData,
  query,
  orderBy,
  serverTimestamp
} from '@angular/fire/firestore';

import {
  AuthService
} from './auth.service';

import {
  BehaviorSubject
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private firestore =
    inject(Firestore);

  private authService =
    inject(AuthService);

  private ngZone =
    inject(NgZone);

  private favoritesSubject =
    new BehaviorSubject<any[]>([]);

  favorites$ =
    this.favoritesSubject.asObservable();

  constructor() {

    this.authService.user$
      .subscribe((user) => {

        console.log(
          'USER AUTH:',
          user
        );

        if (!user) {

          this.ngZone.run(() => {

            this.favoritesSubject.next([]);
          });

          return;
        }

        this.listenFavorites(
          user.uid
        );
      });
  }

  // ✅ ESCUCHAR FAVORITOS
  private listenFavorites(
    uid: string
  ) {

    const ref = collection(
      this.firestore,
      `users/${uid}/favorites`
    );

    const q = query(
      ref,
      orderBy('savedAt', 'desc')
    );

    collectionData(q, {
      idField: 'docId'
    })
    .subscribe({

      next: (favorites: any[]) => {

        console.log(
          '✅ FAVORITOS FIRESTORE:',
          favorites
        );

        // 🔥 SOLUCIÓN
        this.ngZone.run(() => {

          this.favoritesSubject.next(
            favorites
          );
        });
      },

      error: (error) => {

        console.error(
          '🔥 ERROR FAVORITES:',
          error
        );
      }
    });
  }

  // ✅ OBTENER ID
  private getPlaceId(
    place: any
  ): string {

    return String(
      place?.id ||
      place?.placeId ||
      place?.fsq_id
    );
  }

  // ✅ GUARDAR
  async saveFavorite(
    place: any
  ) {

    try {

      const user =
        this.authService
          .getCurrentUser();

      if (!user) {

        console.error(
          '❌ NO USER'
        );

        return;
      }

      const placeId =
        this.getPlaceId(place);

      console.log(
        '🔥 GUARDANDO FAVORITO:',
        placeId
      );

      const ref = doc(
        this.firestore,
        `users/${user.uid}/favorites/${placeId}`
      );

      await setDoc(ref, {
        ...place,
        id: placeId,
        savedAt: serverTimestamp()
      });

      console.log(
        '✅ FAVORITO GUARDADO'
      );

    } catch(error) {

      console.error(
        '🔥 ERROR SAVE:',
        error
      );
    }
  }

  // ✅ ELIMINAR
  async removeFavorite(
    placeId: number | string
  ) {

    try {

      const user =
        this.authService
          .getCurrentUser();

      if (!user) return;

      console.log(
        '🗑️ ELIMINANDO FAVORITO:',
        placeId
      );

      const ref = doc(
        this.firestore,
        `users/${user.uid}/favorites/${String(placeId)}`
      );

      await deleteDoc(ref);

      console.log(
        '✅ FAVORITO ELIMINADO'
      );

    } catch(error) {

      console.error(
        '🔥 ERROR REMOVE:',
        error
      );
    }
  }

  // ✅ VALIDAR
  isFavorite(
    placeId: number | string
  ): boolean {

    return this.favoritesSubject.value
      .some(f =>
        String(f.id) ===
        String(placeId)
      );
  }

  // ✅ TOGGLE
  async toggleFavorite(
    place: any
  ) {

    try {

      const placeId =
        this.getPlaceId(place);

      const isFav =
        this.isFavorite(placeId);

      console.log(
        '🔄 TOGGLE:',
        placeId,
        isFav
      );

      if (isFav) {

        await this.removeFavorite(
          placeId
        );

      } else {

        await this.saveFavorite(
          place
        );
      }

    } catch(error) {

      console.error(
        '🔥 ERROR TOGGLE:',
        error
      );
    }
  }
}
