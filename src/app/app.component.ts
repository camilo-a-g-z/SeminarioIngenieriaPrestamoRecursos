import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card/card.component';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PrestamoRecursos';

  constructor(
    private usuarioService: UsuarioService
  ) {

  }

  // async ngOnInit(): Promise<void> {
  //   const response = await this.usuarioService.addUsuario({
  //     apellidos: 'Díaz Vargas',
  //     nombres: 'Miguel Nicolás',
  //     correo: 'nitachi@gmail.com'
  //   })
  //   console.log(response)
  // }
}