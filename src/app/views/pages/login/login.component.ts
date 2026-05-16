import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = '';

  password = '';

  constructor(
    private service: AuthService
  ) {}

  login() {

    const data = {
      username: this.email,
      password: this.password
    };

    this.service.login(data).subscribe({

      next: () => {

        localStorage.setItem('token', 'logado');

        alert('Login realizado');
      },

      error: () => {

        alert('Email ou senha inválidos');
      }
    });
  }
}
