import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Produto } from '../models/produto';
import { Observable, fromEvent } from 'rxjs';
import { ProdutoCountComponent } from '../componentes/produto-count.component';
import { ProdutoDetalheComponent } from '../componentes/produto-card-detalhe.component';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styleUrls: ['./produto-dashboard.component.css'],
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {
  produtos: Produto[];
  @ViewChild(ProdutoCountComponent, { static: false })
  contador: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;
  constructor() {}
  @ViewChildren(ProdutoDetalheComponent)
  botoes: QueryList<ProdutoDetalheComponent>;

  ngOnInit(): void {
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
        nome: 'Teste 3',
        ativo: true,
        valor: 300,
        imagem: 'laptop.jpg',
      },
      {
        id: 4,
        nome: 'Teste 4',
        ativo: true,
        valor: 400,
        imagem: 'mouse.jpg',
      },
      {
        id: 5,
        nome: 'Teste 5',
        ativo: true,
        valor: 500,
        imagem: 'teclado.jpg',
      },
      {
        id: 6,
        nome: 'Teste 6',
        ativo: false,
        valor: 600,
        imagem: 'headset.jpg',
      },
    ];
  }

  ngAfterViewInit(): void {
    console.log('Objeto do contator: ', this.contador.produtos);
    let clickTexto: Observable<any> = fromEvent(
      this.mensagemTela.nativeElement,
      'click'
    );
    clickTexto.subscribe(() => {
      alert('Clicou no texto!');
      return;
    });
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }
}
