import { Injectable, inject } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private firestore = inject(Firestore);

  async saveUser(uid: string, data: any) {
    try {
      console.log('Saving user in Firestore...', uid);

      const ref = doc(this.firestore, `users/${uid}`);

      await setDoc(ref, data, { merge: true });

      console.log('User saved successfully');
    } catch (err) {
      console.error('Firestore error:', err);
      throw err;
    }
  }
}
