import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [

  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
  },

  {
    name: 'Produtos',
    url: '/products',
    iconComponent: { name: 'cil-cart' },
  },

  {
    name: 'Vendas',
    url: '/sales',
    iconComponent: { name: 'cil-dollar' },
  },

  {
    name: 'Estoque',
    url: '/stock',
    iconComponent: { name: 'cil-storage' },
  },

  {
    name: 'Clientes',
    url: '/clients',
    iconComponent: { name: 'cil-user' },
  }

];
