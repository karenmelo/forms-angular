import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FileSizePipe } from './filesize.pipe';
import { Filme } from './filme';
import { ImageFormaterPipe } from './image.pipe';

@Component({
  standalone: true,
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css'],
  providers: [ImageFormaterPipe],
  imports: [CommonModule, FileSizePipe],
})
export class FilmesComponent implements OnInit {
  filmes: Filme[];
  mapped: Filme[];
  constructor(private imageFormat: ImageFormaterPipe) {}
  ngOnInit() {
    this.filmes = [
      {
        nome: 'Um Sonho de Liberdade',
        dataLancamento: new Date('12/07/1994'),
        valor: 150.0,
        imagem: 'sonhoLiberdade.jpg',
        tamanho: 513326980,
      },
      {
        nome: 'O Poderoso Chefão',
        dataLancamento: new Date('01/12/1972'),
        valor: 200.0,
        imagem: 'poderosoChefaoI.jpg',
        tamanho: 1342177280,
      },
      {
        nome: 'Batman: O Cavaleiro das Trevas ',
        dataLancamento: new Date('08/01/2008'),
        valor: 70.0,
        imagem: 'Batman2008.jpg',
        tamanho: 719974720,
      },
      {
        nome: 'o poderoso chefão 2',
        dataLancamento: new Date('01/12/1974'),
        valor: 120.0,
        imagem: 'poderosoChefaoII.jpg',
        tamanho: 1254589899,
      },
      {
        nome: 'Pulp Fiction: Tempo de Violência ',
        dataLancamento: new Date('01/08/1994'),
        valor: 190.0,
        imagem: '',
        tamanho: 773039680,
      },
    ];
    this.mapped = this.filmes.map((filme) => {
      return {
        nome: filme.nome,
        dataLancamento: filme.dataLancamento,
        valor: filme.valor,
        tamanho: filme.tamanho,
        imagem: this.imageFormat.transform(filme.imagem, 'default', true),
      };
    });
  }
}
