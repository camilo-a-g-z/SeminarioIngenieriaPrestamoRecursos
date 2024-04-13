import { inject, Injectable } from '@angular/core';
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
import { TipoRecurso } from '../../interfaces/tipoRecurso.model';

const PATH = 'TipoRecurso'

@Injectable({
  providedIn: 'root'
})
export class TipoRecursoService {
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, 'TipoRecurso');

  getTipoRecursos(): Observable<TipoRecurso[]> {
    const tiposRecurso = collectionData(this._collection) as Observable<TipoRecurso[]>;
    return tiposRecurso;
  }

  async getOneTipoRecurso(id: string) {
    const document = doc(this._firestore, PATH, id)
    return await getDoc(document)
  }

  async createTipoRecurso(tipoRecurso: TipoRecurso) {
    return addDoc(this._collection, tipoRecurso)
  }

  updateTipoRecurso(id: string, tipoRecurso: TipoRecurso) {
    const document = doc(this._firestore, PATH, id)
    return updateDoc(document, { ...tipoRecurso })
  }

  async deleteTipoRecurso(id: string) {
    const document = doc(this._firestore, PATH, id)
    return deleteDoc(document)
  }
}
