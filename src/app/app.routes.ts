import { Routes } from '@angular/router';

import { LoginComponent } from './views/pages/login/login.component';

import { AdminLoginComponent } from './views/pages/admin-login/admin-login.component';

import { AdminDashboardComponent } from './views/admin/admin-dashboard.component';

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'admin/login',
    component: AdminLoginComponent
  },

  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent
  },

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: '/login'
  }
];
