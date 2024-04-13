import { inject, Injectable } from '@angular/core';
import { Empleado } from '../../interfaces/empleado.model';
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

const PATH = 'Empleado'

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
    private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, 'Empleado');

  getEmpleados(): Observable<Empleado[]> {
    const empleados = collectionData(this._collection) as Observable<Empleado[]>;
    return empleados;
  }

  async getOneEmpleado(id: string) {
    const document = doc(this._firestore, PATH, id)
    return await getDoc(document)
  }

  async createEmpleado(empleado: Empleado) {
    return addDoc(this._collection, empleado)
  }

  updateEmpleado(id: string, empleado: Empleado) {
    const document = doc(this._firestore, PATH, id)
    return updateDoc(document, { ...empleado })
  }

  async deleteEmpleado(id: string) {
    const document = doc(this._firestore, PATH, id)
    return deleteDoc(document)
  }
}
