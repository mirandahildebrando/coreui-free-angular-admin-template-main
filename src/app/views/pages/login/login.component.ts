import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(
    private service: AuthService,
    private router: Router
  ) {}

  login() {

    const data = {
      username: this.email,
      password: this.password
    };

    this.service.login(data).subscribe({

      next: () => {

        localStorage.setItem('token', 'logado');

        alert('Login válido');

        this.router.navigate(['/dashboard']);
      },

      error: () => {
        alert('Login inválido');
      }
    });
  }
}
