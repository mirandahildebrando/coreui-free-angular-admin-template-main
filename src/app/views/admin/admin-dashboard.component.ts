import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-5">
      <h1>Painel Administrativo</h1>
    </div>
  `
})
export class AdminDashboardComponent {
}
