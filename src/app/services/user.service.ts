

// import { Injectable, inject } from '@angular/core';

// import {
//   Firestore,
//   doc,
//   setDoc,
//   getDoc
// } from '@angular/fire/firestore';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   private firestore =
//     inject(Firestore);

//   // 🔥 CREAR USER
//   async createUser(
//     uid: string,
//     data: any
//   ) {

//     const ref = doc(
//       this.firestore,
//       `users/${uid}`
//     );

//     await setDoc(ref, data);
//   }

//   // 🔥 GUARDAR USER
//   async saveUser(
//     uid: string,
//     data: any
//   ) {

//     const ref = doc(
//       this.firestore,
//       `users/${uid}`
//     );

//     await setDoc(ref, data, {
//       merge: true
//     });
//   }

//   // 🔥 OBTENER USER
//   async getUser(uid: string) {

//     const ref = doc(
//       this.firestore,
//       `users/${uid}`
//     );

//     const snap =
//       await getDoc(ref);

//     if (!snap.exists()) {
//       return null;
//     }

//     return snap.data();
//   }
// }

import {
  Injectable,
  inject
} from '@angular/core';

import {
  Firestore,
  doc,
  setDoc,
  getDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private firestore =
    inject(Firestore);

  // =========================================
  // CREATE USER
  // =========================================

  async createUser(
    uid: string,
    data: any
  ) {

    const ref = doc(
      this.firestore,
      `users/${uid}`
    );

    await setDoc(
      ref,
      {
        ...data,

        visitedPlaces:
          data.visitedPlaces || [],

        comments:
          data.comments || []
      }
    );
  }

  // =========================================
  // SAVE USER
  // =========================================

  async saveUser(
    uid: string,
    data: any
  ) {

    const ref = doc(
      this.firestore,
      `users/${uid}`
    );

    await setDoc(
      ref,
      data,
      {
        merge: true
      }
    );
  }

  // =========================================
  // GET USER
  // =========================================

  async getUser(uid: string) {

    const ref = doc(
      this.firestore,
      `users/${uid}`
    );

    const snap =
      await getDoc(ref);

    if (!snap.exists()) {

      return null;
    }

    return snap.data();
  }

  // =========================================
  // ADD VISITED PLACE
  // =========================================

  async addVisitedPlace(
    uid: string,
    place: any
  ) {

    try {

      const ref = doc(
        this.firestore,
        `users/${uid}`
      );

      const snap =
        await getDoc(ref);

      if (!snap.exists()) {
        return;
      }

      const userData =
        snap.data();

      const visitedPlaces =
        userData['visitedPlaces'] || [];

      // =====================================
      // IMAGE FIX
      // =====================================

      let image = '';

      if (place.image) {

        image = place.image;

      } else if (
        place.photos &&
        place.photos.length > 0
      ) {

        image =
          place.photos[0];

      } else {

        image =
          'https://placehold.co/600x400?text=MedExplorer';
      }

      // =====================================
      // NEW PLACE
      // =====================================

      const newPlace = {

        id:
          crypto.randomUUID(),

        placeId:
          place.id ||
          place.placeId ||
          place.fsq_id ||
          '',

        name:
          place.name || 'Lugar',

        image,

        location:
          typeof place.location === 'string'
            ? place.location
            : place.location?.formatted_address ||
              place.location?.address ||
              'Ubicación no disponible',

        visitedAt:
          new Date()
      };

      // =====================================
      // SAVE ARRAY
      // =====================================

      visitedPlaces.unshift(
        newPlace
      );

      await setDoc(
        ref,
        {
          visitedPlaces
        },
        {
          merge: true
        }
      );

      console.log(
        '✅ VISITED PLACE SAVED'
      );

    } catch(error) {

      console.error(
        '🔥 ERROR SAVING VISITED PLACE:',
        error
      );
    }
  }

  // =========================================
  // ADD USER COMMENT
  // =========================================

  async addUserComment(
    uid: string,
    comment: any
  ) {

    try {

      const ref = doc(
        this.firestore,
        `users/${uid}`
      );

      const snap =
        await getDoc(ref);

      if (!snap.exists()) {
        return;
      }

      const userData =
        snap.data();

      const comments =
        userData['comments'] || [];

      // =====================================
      // IMAGE FIX
      // =====================================

      const placeImage =
        comment.placeImage ||
        'https://placehold.co/600x400?text=Comentario';

      // =====================================
      // NEW COMMENT
      // =====================================

      const newComment = {

        id:
          crypto.randomUUID(),

        text:
          comment.text || '',

        rating:
          Number(comment.rating || 0),

        place:
          comment.placeName || '',

        placeImage,

        createdAt:
          new Date()
      };

      // =====================================
      // SAVE ARRAY
      // =====================================

      comments.unshift(
        newComment
      );

      await setDoc(
        ref,
        {
          comments
        },
        {
          merge: true
        }
      );

      console.log(
        '✅ USER COMMENT SAVED'
      );

    } catch(error) {

      console.error(
        '🔥 ERROR SAVING USER COMMENT:',
        error
      );
    }
  }
}
