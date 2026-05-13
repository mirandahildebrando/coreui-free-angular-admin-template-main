import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

  produtos: any[] = [];

  produto = {
    name: '',
    price: 0,
    stock: 0,
    company: {
      id: 1
    }
  };

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {

    this.service.listar().subscribe({
      next: (data: any[]) => {
        this.produtos = data;
      }
    });
  }

  salvar() {

    this.service.salvar(this.produto).subscribe({

      next: () => {

        alert('Produto cadastrado');

        this.produto = {
          name: '',
          price: 0,
          stock: 0,
          company: {
            id: 1
          }
        };

        this.listar();
      }
    });
  }

  excluir(id: number) {

    this.service.excluir(id).subscribe({
      next: () => {
        this.listar();
      }
    });
  }
}
