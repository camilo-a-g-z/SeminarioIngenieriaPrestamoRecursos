import { inject, Injectable } from '@angular/core';
import { Recurso } from '../../interfaces/recurso.model';
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

const PATH = 'Recurso'

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, 'Recurso');

  getRecursos(): Observable<Recurso[]> {
    const recursos = collectionData(this._collection) as Observable<Recurso[]>;
    return recursos;
  }

  async getOneRecurso(id: string) {
    const document = doc(this._firestore, PATH, id)
    return await getDoc(document)
  }

  async createRecurso(recurso: Recurso) {
    return addDoc(this._collection, recurso)
  }

  updateRecurso(id: string, recurso: Recurso) {
    const document = doc(this._firestore, PATH, id)
    return updateDoc(document, { ...recurso })
  }

  async deleteRecurso(id: string) {
    const document = doc(this._firestore, PATH, id)
    return deleteDoc(document)
  }
}
