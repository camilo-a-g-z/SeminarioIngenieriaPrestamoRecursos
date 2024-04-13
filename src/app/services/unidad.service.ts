import { inject, Injectable } from '@angular/core';
import { Unidad } from '../../interfaces/unidad.model';
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

const PATH = 'Unidad'

@Injectable({
  providedIn: 'root'
})
export class UnidadService {
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, 'Unidad');

  getUnidad(): Observable<Unidad[]> {
    const unidades = collectionData(this._collection) as Observable<Unidad[]>;
    return unidades;
  }

  async getOneUnidad(id: string) {
    const document = doc(this._firestore, PATH, id)
    return await getDoc(document)
  }

  async createUnidad(unidad: Unidad) {
    return addDoc(this._collection, unidad)
  }

  updateUnidad(id: string, unidad: Unidad) {
    const document = doc(this._firestore, PATH, id)
    return updateDoc(document, { ...unidad })
  }

  async deleteUnidad(id: string) {
    const document = doc(this._firestore, PATH, id)
    return deleteDoc(document)
  }
}
