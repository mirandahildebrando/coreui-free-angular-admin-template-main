import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `

    <div class="container mt-5">

      <div class="row justify-content-center">

        <div class="col-md-4">

          <div class="card p-4 shadow border-0">

            <h2 class="mb-4 text-center">
              Login Administrador
            </h2>

            <div
              *ngIf="mensagem"
              class="alert"
              [ngClass]="erro ? 'alert-danger' : 'alert-success'">

              {{ mensagem }}

            </div>

            <div class="mb-3">

              <label class="form-label">
                Email Admin
              </label>

              <input
                type="email"
                class="form-control"
                [(ngModel)]="email">

            </div>

            <div class="mb-3">

              <label class="form-label">
                Senha
              </label>

              <input
                type="password"
                class="form-control"
                [(ngModel)]="password">

            </div>

            <button
              class="btn btn-dark w-100"
              [disabled]="loading"
              (click)="login()">

              {{ loading ? 'Entrando...' : 'Entrar como Admin' }}

            </button>

          </div>

        </div>

      </div>

    </div>

  `
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

          this.router.navigate(['/admin/dashboard']);

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
