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
  orderBy,
  serverTimestamp
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

  // =========================================
  // ✅ GET COMMENTS
  // =========================================

  getComments(
    placeId: number | string
  ): Observable<any[]> {

    const commentsRef =
      collection(
        this.firestore,
        'comments'
      );

    const q = query(

      commentsRef,

      where(
        'placeId',
        '==',
        String(placeId)
      ),

      orderBy(
        'createdAt',
        'desc'
      )
    );

    return collectionData(
      q,
      {
        idField: 'id'
      }
    ) as Observable<any[]>;
  }

  // =========================================
  // ✅ ADD COMMENT
  // =========================================

  async addComment(comment: any) {

    const commentsRef =
      collection(
        this.firestore,
        'comments'
      );

    return await addDoc(
      commentsRef,
      {
        ...comment,

        placeId:
          String(comment.placeId),

        createdAt:
          serverTimestamp()
      }
    );
  }

  // =========================================
  // ✅ CALCULAR PROMEDIO
  // =========================================

  calculateAverageRating(
    comments: any[]
  ): number {

    if (!comments.length) {

      return 0;
    }

    const total =
      comments.reduce(
        (
          acc,
          comment
        ) => {

          return (
            acc +
            Number(comment.rating || 0)
          );

        },
        0
      );

    return Number(
      (
        total / comments.length
      ).toFixed(1)
    );
  }
}
