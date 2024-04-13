import { inject, Injectable } from '@angular/core';
import { Reserva } from '../../interfaces/reserva.model';
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

const PATH = 'Reserva'

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, 'Reserva');

  getReservas(): Observable<Reserva[]> {
    const reservas = collectionData(this._collection) as Observable<Reserva[]>;
    return reservas;
  }

  async getOneReserva(id: string) {
    const document = doc(this._firestore, PATH, id)
    return await getDoc(document)
  }

  async createReserva(reserva: Reserva) {
    return addDoc(this._collection, reserva)
  }

  updateReserva(id: string, reserva: Reserva) {
    const document = doc(this._firestore, PATH, id)
    return updateDoc(document, { ...reserva })
  }

  async deleteReserva(id: string) {
    const document = doc(this._firestore, PATH, id)
    return deleteDoc(document)
  }
}
