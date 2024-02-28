import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDiZonesComponent } from './bar.component';

describe('BarDiZonesComponent', () => {
  let component: BarDiZonesComponent;
  let fixture: ComponentFixture<BarDiZonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarDiZonesComponent],
    });
    fixture = TestBed.createComponent(BarDiZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
