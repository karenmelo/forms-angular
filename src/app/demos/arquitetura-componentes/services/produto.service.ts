import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { Observable } from 'rxjs';

@Injectable()
export class ProdutoService {
  produtos: Produto[];

  constructor() {
    this.produtos = [
      {
        id: 1,
        nome: 'Teste',
        ativo: true,
        valor: 100,
        imagem: 'celular.jpg',
      },
      {
        id: 2,
        nome: 'Teste 2',
        ativo: true,
        valor: 200,
        imagem: 'gopro.jpg',
      },
      {
        id: 3,
        nome: 'Teste',
        ativo: true,
        valor: 300,
        imagem: 'laptop.jpg',
      },
      {
        id: 4,
        nome: 'Teste',
        ativo: true,
        valor: 400,
        imagem: 'mouse.jpg',
      },
      {
        id: 5,
        nome: 'Teste',
        ativo: true,
        valor: 500,
        imagem: 'teclado.jpg',
      },
      {
        id: 6,
        nome: 'Teste',
        ativo: true,
        valor: 600,
        imagem: 'headset.jpg',
      },
    ];
  }
  obterTodos(estado: string): Produto[] {
    if (estado === 'ativos') {
      return this.produtos.filter((produto) => produto.ativo);
    }
    return this.produtos;
  }

  obterPorId(id: number): Produto | null {
    const produtoEncontrado = this.produtos.find((produto) => produto.id == id);
    if (produtoEncontrado) {
      return produtoEncontrado;
    }
    return null;
  }
}