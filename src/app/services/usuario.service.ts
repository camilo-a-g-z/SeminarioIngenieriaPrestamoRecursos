import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Usuario } from '../modelo/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: Firestore) {
  }

  addUsuario(usuario: Usuario) {
    const usuarioRef = collection(this.firestore, 'usuario');
    return addDoc(usuarioRef, usuario)
  }

  getUsuarios() {

  }

}
