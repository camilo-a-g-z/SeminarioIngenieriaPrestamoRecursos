import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'card-usuario',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './cardUser.component.html',
  styleUrl: './cardUser.component.css'
})
export class CardUsuario {
  
}


