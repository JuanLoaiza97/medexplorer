import { Injectable, inject } from '@angular/core';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  user,
  User,
  sendPasswordResetEmail
} from '@angular/fire/auth';

import {
  Firestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from '@angular/fire/firestore';

import {
  BehaviorSubject
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth =
    inject(Auth);

  private firestore =
    inject(Firestore);

  private userSubject =
    new BehaviorSubject<any>(null);

  user$ =
    this.userSubject.asObservable();

  constructor() {

    this.initAuthListener();
  }

  // =========================================
  // AUTH LISTENER
  // =========================================

  private initAuthListener() {

    user(this.auth)
      .subscribe(async (
        firebaseUser: User | null
      ) => {

        if (!firebaseUser) {

          this.userSubject.next(null);
          return;
        }

        try {

          const ref = doc(
            this.firestore,
            `users/${firebaseUser.uid}`
          );

          const snap =
            await getDoc(ref);

          const firestoreData =
            snap.exists()
              ? snap.data()
              : {};

          const finalUser = {

            uid:
              firebaseUser.uid,

            email:
              firebaseUser.email,

            ...firestoreData
          };

          this.userSubject.next(
            finalUser
          );

        } catch(error) {

          console.error(
            '🔥 ERROR AUTH:',
            error
          );

          this.userSubject.next({

            uid:
              firebaseUser.uid,

            email:
              firebaseUser.email
          });
        }
      });
  }

  // =========================================
  // LOGIN
  // =========================================

  login(
    email: string,
    password: string
  ) {

    return signInWithEmailAndPassword(
      this.auth,
      email,
      password
    );
  }

  // =========================================
  // REGISTER
  // =========================================

  async register(
    email: string,
    password: string,
    extraData: any = {}
  ) {

    const credential =
      await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

    const uid =
      credential.user.uid;

    await setDoc(
      doc(
        this.firestore,
        `users/${uid}`
      ),
      {

        email,

        visitedPlaces: [],

        comments: [],

        favorites: [],

        createdAt:
          serverTimestamp(),

        ...extraData
      },
      {
        merge: true
      }
    );

    return credential;
  }

  // =========================================
  // RESET PASSWORD
  // =========================================

  resetPassword(
    email: string
  ) {

    return sendPasswordResetEmail(
      this.auth,
      email
    );
  }

  // =========================================
  // LOGOUT
  // =========================================

  logout() {

    return signOut(
      this.auth
    );
  }

  // =========================================
  // CURRENT USER
  // =========================================

  getCurrentUser() {

    return this.userSubject.value;
  }
}
