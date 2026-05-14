import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';

  loading = false;

  mensagem = '';

  erro = false;

  constructor(
    private service: AuthService,
    private router: Router
  ) {}

  register() {

    if (this.loading) {
      return;
    }

    this.loading = true;

    this.mensagem = '';

    const data = {
      username: this.email,
      companyName: this.name,
      password: this.password
    };

    this.service.register(data).subscribe({

      next: () => {

        this.erro = false;

        this.mensagem = 'Usuário cadastrado com sucesso!';

        this.name = '';
        this.email = '';
        this.password = '';

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);

        this.loading = false;
      },

      error: () => {

        this.erro = true;

        this.mensagem = 'Erro ao cadastrar usuário';

        this.loading = false;
      }
    });
  }
}
