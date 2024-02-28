import { Component, OnInit } from '@angular/core';
import { BarServices } from './bar.service';

@Component({
  standalone: true,
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  providers: [{ provide: BarServices, useClass: BarServices }],
})
export class BarComponent implements OnInit {
  barrbebida1: string;
  constructor(private barServices: BarServices) {}
  ngOnInit(): void {
    this.barrbebida1 = this.barServices.obterBebidas();
  }
}
