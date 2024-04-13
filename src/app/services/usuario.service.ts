import { inject, Injectable } from '@angular/core';
import { Usuario } from '../../interfaces/usuario.model';
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

const PATH = 'Usuario'

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, 'Usuario');

  getUsuarios(): Observable<Usuario[]> {
    const usuarios = collectionData(this._collection) as Observable<Usuario[]>;
    return usuarios;
  }

  async getOneUsuario(id: string) {
    const document = doc(this._firestore, PATH, id)
    return await getDoc(document)
  }

  async createUsuario(usuario: Usuario) {
    return addDoc(this._collection, usuario)
  }

  updateUsuario(id: string, usuario: Usuario) {
    const document = doc(this._firestore, PATH, id)
    return updateDoc(document, { ...usuario })
  }

  async deleteUsuario(id: string) {
    const document = doc(this._firestore, PATH, id)
    return deleteDoc(document)
  }
}
