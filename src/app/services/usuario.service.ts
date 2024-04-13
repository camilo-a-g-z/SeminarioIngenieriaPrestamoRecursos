import { inject, Injectable } from '@angular/core';
import { Usuario } from '../modelo/usuario.model';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';

import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, 'Usuario');

  getUsuarios(): Observable<Usuario[]> {
    const users = collectionData(this._collection) as Observable<Usuario[]>;
    return users;
  }
}
