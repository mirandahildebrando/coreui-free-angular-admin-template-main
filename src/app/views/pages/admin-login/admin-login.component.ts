import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent {

  email = '';

  password = '';

  loading = false;

  mensagem = '';

  erro = false;

  constructor(
    private service: AuthService,
    private router: Router
  ) {}

  login() {

    if (this.loading) {
      return;
    }

    this.loading = true;

    this.mensagem = '';

    const data = {
      username: this.email,
      password: this.password
    };

    this.service.adminLogin(data).subscribe({

      next: () => {

        localStorage.setItem('token', 'admin-logado');

        this.erro = false;

        this.mensagem = 'Login admin realizado com sucesso!';

        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);

        this.loading = false;
      },

      error: () => {

        this.erro = true;

        this.mensagem = 'Admin inválido';

        this.loading = false;
      }
    });
  }
}
