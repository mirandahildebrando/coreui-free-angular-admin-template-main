import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SaleService } from '../../services/sale.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sales.component.html',
})
export class SalesComponent implements OnInit {

  vendas: any[] = [];

  produtos: any[] = [];

  carrinho: any[] = [];

  produtoSelecionado: any = null;

  quantidade = 1;

  total = 0;

  salvando = false;

  mensagem = '';

  erro = '';

  constructor(
    private saleService: SaleService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.listarVendas();
    this.listarProdutos();
  }

  listarVendas() {

    this.saleService.listar().subscribe({
      next: (data: any[]) => {
        this.vendas = data;
      }
    });
  }

  listarProdutos() {

    this.productService.listar().subscribe({
      next: (data: any[]) => {
        this.produtos = data;
      }
    });
  }

  adicionarProduto() {

    if (!this.produtoSelecionado) {
      return;
    }

    const subtotal =
      this.produtoSelecionado.price * this.quantidade;

    this.carrinho.push({
      id: this.produtoSelecionado.id,
      name: this.produtoSelecionado.name,
      quantity: this.quantidade,
      price: this.produtoSelecionado.price,
      subtotal: subtotal
    });

    this.calcularTotal();

    this.quantidade = 1;
  }

  calcularTotal() {

    this.total = this.carrinho.reduce(
      (acc, item) => acc + item.subtotal,
      0
    );
  }

  removerItem(index: number) {

    this.carrinho.splice(index, 1);

    this.calcularTotal();
  }

  finalizarVenda() {

    if (this.salvando) {
      return;
    }

    if (this.carrinho.length === 0) {

      this.erro = 'Adicione produtos na venda';

      setTimeout(() => {
        this.erro = '';
      }, 3000);

      return;
    }

    this.salvando = true;

    this.mensagem = '';
    this.erro = '';

    const items = this.carrinho.map(item => {

      return {

        quantity: item.quantity,

        price: item.price,

        product: {
          id: item.id
        }
      };
    });

    const venda = {

      total: this.total,

      createdAt: new Date().toISOString(),

      company: {
        id: 1
      },

      items: items
    };

    this.saleService.salvar(venda).subscribe({

      next: () => {

        this.mensagem = 'Venda realizada com sucesso';

        this.carrinho = [];

        this.total = 0;

        this.produtoSelecionado = null;

        this.listarVendas();

        this.salvando = false;

        setTimeout(() => {
          this.mensagem = '';
        }, 3000);
      },

      error: (err) => {

        console.log(err);

        this.erro = 'Erro ao salvar venda';

        this.salvando = false;

        setTimeout(() => {
          this.erro = '';
        }, 3000);
      }
    });
  }
}
