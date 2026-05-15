import { Routes } from '@angular/router';

import { DefaultLayoutComponent } from './layout';

import { ProductsComponent } from './views/products/products.component';
import { SalesComponent } from './views/sales/sales.component';
import { StockComponent } from './views/stock/stock.component';

import { LoginComponent } from './views/pages/login/login.component';

import { AdminLoginComponent } from './views/pages/admin-login/admin-login.component';

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
    path: '',
    component: DefaultLayoutComponent,
    children: [

      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/routes').then((m) => m.routes)
      },

      {
        path: 'products',
        component: ProductsComponent
      },

      {
        path: 'sales',
        component: SalesComponent
      },

      {
        path: 'stock',
        component: StockComponent
      },

      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }
    ]
  }
];
