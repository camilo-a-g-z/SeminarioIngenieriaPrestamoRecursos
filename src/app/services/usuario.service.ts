import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Usuario } from '../modelo/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: Firestore) {
  }
  testConnection() {
    const usuarioRef = collection(this.firestore, 'Usuario');
    console.log(usuarioRef)
  }

  addUsuario(usuario: Usuario) {
    const usuarioRef = collection(this.firestore, 'Usuario');
    //return addDoc(usuarioRef, usuario)
    return null;
  }

  getUsuarios() {

  }

}
