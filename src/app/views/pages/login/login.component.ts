import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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

    this.service.login(data).subscribe({

      next: () => {

        localStorage.setItem('token', 'logado');

        this.erro = false;

        this.mensagem = 'Login realizado com sucesso!';

        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);

        this.loading = false;
      },

      error: () => {

        this.erro = true;

        this.mensagem = 'Email ou senha inválidos';

        this.loading = false;
      }
    });
  }
}
