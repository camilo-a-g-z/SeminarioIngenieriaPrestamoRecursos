import { inject, Injectable } from '@angular/core';
import { Prestamo } from '../../interfaces/prestamo.model';
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

const PATH = 'Prestamo'

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, 'Prestamo');

  getPrestamos(): Observable<Prestamo[]> {
    const prestamos = collectionData(this._collection) as Observable<Prestamo[]>;
    return prestamos;
  }

  async getOnePrestamo(id: string) {
    const document = doc(this._firestore, PATH, id)
    return await getDoc(document)
  }

  async createPrestamo(prestamo: Prestamo) {
    return addDoc(this._collection, prestamo)
  }

  updatePrestamo(id: string, prestamo: Prestamo) {
    const document = doc(this._firestore, PATH, id)
    return updateDoc(document, { ...prestamo })
  }

  async deletePrestamo(id: string) {
    const document = doc(this._firestore, PATH, id)
    return deleteDoc(document)
  }
}
