import { Component, OnInit } from '@angular/core';
import { BarServices } from './bar.service';

@Component({
  standalone: true,
  selector: 'app-bar-di-zones',
  templateUrl: './bar-di-zones.component.html',
  styleUrls: ['./bar-di-zones.component.css'],
  providers: [BarServices],
})
export class BarComponent implements OnInit {
  constructor(barServices: BarServices) {}
  ngOnInit(): void {}
}
