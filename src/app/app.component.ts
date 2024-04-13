import { Component, EventEmitter, inject, Output } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card/card.component';
import { UsuarioService } from './services/usuario.service';
import { collection, Firestore, getDocs } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Usuario } from './modelo/usuario.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PrestamoRecursos';
  private userService = inject(UsuarioService);
  usuarios$!: Observable<Usuario[]>;
  constructor() {
    this.usuarios$ = this.userService.getUsuarios();
  }

  ngOnInit() {

  }

  async handleClick() {


  }
}
