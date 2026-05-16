import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `

    <div class="container mt-5">

      <div class="card shadow border-0 p-4">

        <div class="d-flex justify-content-between align-items-center mb-4">

          <h2>
            Painel Administrativo
          </h2>

          <button class="btn btn-danger">
            Sair
          </button>

        </div>

        <hr>

        <h4 class="mb-3">
          Criar Empresa
        </h4>

        <div class="row">

          <div class="col-md-4 mb-3">

            <input
              type="text"
              class="form-control"
              placeholder="Nome da empresa">

          </div>

          <div class="col-md-4 mb-3">

            <input
              type="email"
              class="form-control"
              placeholder="Email da empresa">

          </div>

          <div class="col-md-4 mb-3">

            <input
              type="password"
              class="form-control"
              placeholder="Senha inicial">

          </div>

        </div>

        <button class="btn btn-dark mb-5">
          Criar Empresa
        </button>

        <h4 class="mb-3">
          Empresas Cadastradas
        </h4>

        <table class="table table-hover">

          <thead>

            <tr>

              <th>
                Empresa
              </th>

              <th>
                Email
              </th>

              <th>
                Status
              </th>

              <th>
                Ações
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>
                Mercado Silva
              </td>

              <td>
                mercado@email.com
              </td>

              <td>
                <span class="badge bg-success">
                  Ativa
                </span>
              </td>

              <td>

                <button class="btn btn-warning btn-sm me-2">
                  Bloquear
                </button>

                <button class="btn btn-danger btn-sm">
                  Excluir
                </button>

              </td>

            </tr>

            <tr>

              <td>
                Adega Central
              </td>

              <td>
                adega@email.com
              </td>

              <td>
                <span class="badge bg-danger">
                  Bloqueada
                </span>
              </td>

              <td>

                <button class="btn btn-success btn-sm me-2">
                  Ativar
                </button>

                <button class="btn btn-danger btn-sm">
                  Excluir
                </button>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  `
})
export class AdminDashboardComponent {
}
