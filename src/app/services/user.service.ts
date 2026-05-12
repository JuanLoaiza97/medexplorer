

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
