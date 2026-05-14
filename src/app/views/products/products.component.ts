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

  salvando = false;

  mensagem = '';

  erro = '';

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

    if (this.salvando) {
      return;
    }

    if (
      !this.produto.name ||
      this.produto.price <= 0 ||
      this.produto.stock < 0
    ) {

      this.erro = 'Preencha os campos corretamente';

      setTimeout(() => {
        this.erro = '';
      }, 3000);

      return;
    }

    this.salvando = true;

    this.mensagem = '';
    this.erro = '';

    this.service.salvar(this.produto).subscribe({

      next: () => {

        this.mensagem = 'Produto cadastrado com sucesso';

        this.produto = {
          name: '',
          price: 0,
          stock: 0,
          company: {
            id: 1
          }
        };

        this.listar();

        this.salvando = false;

        setTimeout(() => {
          this.mensagem = '';
        }, 3000);
      },

      error: () => {

        this.erro = 'Erro ao cadastrar produto';

        this.salvando = false;

        setTimeout(() => {
          this.erro = '';
        }, 3000);
      }
    });
  }

  excluir(id: number) {

    this.service.excluir(id).subscribe({

      next: () => {

        this.mensagem = 'Produto excluído';

        this.listar();

        setTimeout(() => {
          this.mensagem = '';
        }, 3000);
      },

      error: () => {

        this.erro = 'Erro ao excluir produto';

        setTimeout(() => {
          this.erro = '';
        }, 3000);
      }
    });
  }
}
