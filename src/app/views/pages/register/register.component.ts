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

  constructor(
    private service: AuthService,
    private router: Router
  ) {}

  register() {

    const data = {
      username: this.email,
      companyName: this.name,
      password: this.password
    };

    this.service.register(data).subscribe({
      next: () => {
        alert('Usuário cadastrado!');
        this.router.navigate(['/login']);
      },

      error: () => {
        alert('Erro ao cadastrar');
      }
    });
  }
}
