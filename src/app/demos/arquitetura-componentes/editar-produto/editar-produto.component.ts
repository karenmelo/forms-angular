import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/produto';
@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
})
export class EditarProdutoComponent implements OnInit {
  produto: Produto;
  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      const produtoEncontrado = this.produtoService.obterPorId(params['id']);
      if (produtoEncontrado) this.produto = produtoEncontrado;
      console.log(this.produto);
    });
  }

  salvar() {}
}
