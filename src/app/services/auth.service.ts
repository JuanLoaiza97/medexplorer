import { Injectable, inject } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  authState
} from '@angular/fire/auth';

import { Firestore, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = inject(Auth);
  private firestore = inject(Firestore);

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor() {
    this.initAuthListener();
  }

  private initAuthListener() {

    authState(this.auth).subscribe(async (userAuth) => {

      if (!userAuth) {
        this.userSubject.next(null);
        return;
      }

      const ref = doc(this.firestore, `users/${userAuth.uid}`);
      const snap = await getDoc(ref);

      this.userSubject.next({
        uid: userAuth.uid,
        email: userAuth.email,
        ...(snap.exists() ? snap.data() : {})
      });

    });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string, extraData: any = {}) {

    const credential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    const uid = credential.user.uid;

    await setDoc(doc(this.firestore, `users/${uid}`), {
      email,
      createdAt: new Date(),
      ...extraData
    });

    return credential;
  }

  logout() {
    return signOut(this.auth).then(() => {
      this.userSubject.next(null);
    });
  }
}
