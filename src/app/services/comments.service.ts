import {
  Injectable,
  inject
} from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  query,
  where,
  orderBy
} from '@angular/fire/firestore';

import {
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private firestore =
    inject(Firestore);

  // ✅ OBTENER COMMENTS
  getComments(placeId: number | string): Observable<any[]> {

    const commentsRef =
      collection(
        this.firestore,
        'comments'
      );

    const q = query(
      commentsRef,
      where('placeId', '==', placeId),
      orderBy('createdAt', 'desc')
    );

    return collectionData(
      q,
      {
        idField: 'id'
      }
    ) as Observable<any[]>;
  }

  // ✅ AGREGAR COMMENT
  async addComment(comment: any) {

    const commentsRef =
      collection(
        this.firestore,
        'comments'
      );

    return addDoc(
      commentsRef,
      {
        ...comment,
        createdAt: new Date()
      }
    );
  }
}
