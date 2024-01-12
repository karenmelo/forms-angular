import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Produto } from '../models/produto';
import { Observable, of } from 'rxjs';
import { ProdutoService } from './produto.service';

@Injectable()
export class ProdutoResolve implements Resolve<Produto[]> {
  constructor(private produtoService: ProdutoService) {}
  resolve(route: ActivatedRouteSnapshot) {
    const produtos = this.produtoService.obterTodos(route.params['estado']);

    if (produtos instanceof Observable) return produtos;

    return of(produtos);
  }
}
