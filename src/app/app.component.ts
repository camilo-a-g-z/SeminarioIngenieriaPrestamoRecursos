import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card/card.component';
import { UsuarioService } from './services/usuario.service';
import { collection, Firestore, getDocs } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario.model';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, AsyncPipe,
    ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PrestamoRecursos';
  private usuarioService = inject(UsuarioService);
  usuarios$!: Observable<Usuario[]>;

  createUsuarioForm = new FormGroup({
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    idUsuario: new FormControl('', Validators.required),
  });

  updateUsuarioForm = new FormGroup({
    dbIdUsuario: new FormControl('', Validators.required),
    nombres: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    idUsuario: new FormControl('', Validators.required),
  });

  deleteUsuarioForm = new FormGroup({
    idUsuario: new FormControl('', Validators.required),
  });

  constructor() {
    this.usuarios$ = this.usuarioService.getUsuarios();
  }

  ngOnInit() {

  }

  async onCreateSubmit() {
    if (this.createUsuarioForm.invalid) return;
    const usuario = this.createUsuarioForm.value as Usuario;
    await this.usuarioService.createUsuario({
      nombres: usuario.nombres,
      apellidos: usuario.apellidos,
      idUsuario: usuario.idUsuario,
      correo: usuario.correo
    })
  }

  async onUpdateSubmit() {
    if (this.updateUsuarioForm.invalid) return;
    const usuario = {
      nombres: this.updateUsuarioForm.value.nombres,
      apellidos: this.updateUsuarioForm.value.apellidos,
      idUsuario: this.updateUsuarioForm.value.idUsuario,
      correo: this.updateUsuarioForm.value.correo
    } as Usuario;
    const dbIdUsuario = this.updateUsuarioForm.value.dbIdUsuario as string;

    await this.usuarioService.updateUsuario(dbIdUsuario, { ...usuario })
  }

  async onDeleteSubmit() {
    if (this.deleteUsuarioForm.invalid) return;
    try {
      const dbIdUsuario = this.deleteUsuarioForm.value.idUsuario as string;
      await this.usuarioService.deleteUsuario(dbIdUsuario)
    } catch (error) {
      console.log(error);
    }
  }

}
