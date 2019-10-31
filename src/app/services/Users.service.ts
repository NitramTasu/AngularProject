import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import uuid from 'uuid';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient, private db: AngularFirestore, private router: Router) {}

  getById(id: string) {
    return this.db
      .collection('users', ref => ref.where('id', '==', id))
      .snapshotChanges();
  }

  create(data) {return this.db.collection('users').add({
      id: uuid(),
      ...data
    });
  }

  updateByKey(key, data) {
    return this.db
      .collection('users')
      .doc(key)
      .set(data).then(() => {
        this.router.navigate(['/']);
      }).catch(err => {
        console.log('Erro o update: ', err);
      });
  }
  deleteByKey(key) {
    return this.db
      .collection('users')
      .doc(key)
      .delete()
      .catch(err => {
        console.log('Erro ao deletar:', err);
      });
  }

  getAllUsers() {
    return this.db.collection('users').snapshotChanges();
  }
}
