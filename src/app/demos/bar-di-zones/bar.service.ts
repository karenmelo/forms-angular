import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BarServices {
  constructor(private http: HttpClient) {}
  obterBebidas(): string {
    return 'Bedidas';
  }

  obterPorcoes(): string {
    return 'Porcoes';
  }

  obterRefeicoes(): string {
    return 'Refeicoes';
  }
}
