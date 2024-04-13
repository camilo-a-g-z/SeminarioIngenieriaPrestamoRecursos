import { inject, Injectable } from '@angular/core';
import { Devolucion } from '../../interfaces/devolucion.model';
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

const PATH = 'Devolucion'
@Injectable({
  providedIn: 'root'
})
export class DevolucionService {
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, 'Devolucion');

  getDevolucions(): Observable<Devolucion[]> {
    const devolucions = collectionData(this._collection) as Observable<Devolucion[]>;
    return devolucions;
  }

  async getOneDevolucion(id: string) {
    const document = doc(this._firestore, PATH, id)
    return await getDoc(document)
  }

  async createDevolucion(devolucion: Devolucion) {
    return addDoc(this._collection, devolucion)
  }

  updateDevolucion(id: string, devolucion: Devolucion) {
    const document = doc(this._firestore, PATH, id)
    return updateDoc(document, { ...devolucion })
  }

  async deleteDevolucion(id: string) {
    const document = doc(this._firestore, PATH, id)
    return deleteDoc(document)
  }
}
