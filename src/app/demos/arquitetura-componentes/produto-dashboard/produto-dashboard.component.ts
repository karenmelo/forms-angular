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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styleUrls: [],
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {
  produtos: Produto[];
  @ViewChild(ProdutoCountComponent, { static: false })
  contador: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;
  constructor(private route: ActivatedRoute) {}
  @ViewChildren(ProdutoDetalheComponent)
  botoes: QueryList<ProdutoDetalheComponent>;

  ngOnInit(): void {
    this.produtos = this.route.snapshot.data['produtos'];
    console.log(this.route.snapshot.data['teste']);
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
