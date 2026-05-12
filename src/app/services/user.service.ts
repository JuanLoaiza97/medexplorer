// import { Injectable, inject } from '@angular/core';
// import { Firestore, doc, setDoc } from '@angular/fire/firestore';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   private firestore = inject(Firestore);

//   async saveUser(uid: string, data: any) {
//     try {
//       console.log('Saving user in Firestore...', uid);

//       const ref = doc(this.firestore, `users/${uid}`);

//       await setDoc(ref, data, { merge: true });

//       console.log('User saved successfully');
//     } catch (err) {
//       console.error('Firestore error:', err);
//       throw err;
//     }
//   }
// }

// import { Injectable, inject } from '@angular/core';

// import {
//   Firestore,
//   doc,
//   setDoc,
//   getDoc,
//   updateDoc,
//   arrayUnion
// } from '@angular/fire/firestore';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   private firestore = inject(Firestore);

//   // ✅ CREAR PERFIL
//   async createUser(uid: string, data: any) {

//     const ref = doc(this.firestore, `users/${uid}`);

//     await setDoc(ref, {
//       ...data,
//       favorites: [],
//       visitedPlaces: [],
//       comments: [],
//       createdAt: new Date()
//     });

//   }

//   // ✅ OBTENER PERFIL
//   async getUser(uid: string) {

//     const ref = doc(this.firestore, `users/${uid}`);

//     const snap = await getDoc(ref);

//     if (snap.exists()) {
//       return snap.data();
//     }

//     return null;
//   }

//   // ✅ FAVORITOS
//   async addFavorite(uid: string, place: any) {

//     const ref = doc(this.firestore, `users/${uid}`);

//     await updateDoc(ref, {
//       favorites: arrayUnion(place)
//     });

//   }

//   // ✅ VISITADOS
//   async addVisitedPlace(uid: string, place: any) {

//     const ref = doc(this.firestore, `users/${uid}`);

//     await updateDoc(ref, {
//       visitedPlaces: arrayUnion(place)
//     });

//   }

//   // ✅ COMENTARIOS
//   async addComment(uid: string, comment: any) {

//     const ref = doc(this.firestore, `users/${uid}`);

//     await updateDoc(ref, {
//       comments: arrayUnion(comment)
//     });

//   }

// }

import { Injectable, inject } from '@angular/core';

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

  // 🔥 CREAR USER
  async createUser(
    uid: string,
    data: any
  ) {

    const ref = doc(
      this.firestore,
      `users/${uid}`
    );

    await setDoc(ref, data);
  }

  // 🔥 GUARDAR USER
  async saveUser(
    uid: string,
    data: any
  ) {

    const ref = doc(
      this.firestore,
      `users/${uid}`
    );

    await setDoc(ref, data, {
      merge: true
    });
  }

  // 🔥 OBTENER USER
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
}
