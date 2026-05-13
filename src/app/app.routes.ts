import { Routes } from '@angular/router';

import { DefaultLayoutComponent } from './layout';

import { ProductsComponent } from './views/products/products.component';
import { SalesComponent } from './views/sales/sales.component';
import { StockComponent } from './views/stock/stock.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
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
