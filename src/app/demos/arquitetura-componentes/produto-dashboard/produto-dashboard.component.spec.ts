import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDashboardComponent } from './produto-dashboard.component';

describe('ProdutoDashboardComponent', () => {
  let component: ProdutoDashboardComponent;
  let fixture: ComponentFixture<ProdutoDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoDashboardComponent]
    });
    fixture = TestBed.createComponent(ProdutoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
