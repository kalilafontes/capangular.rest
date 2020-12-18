import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCarroComponent } from './dados-carro.component';

describe('DadosCarroComponent', () => {
  let component: DadosCarroComponent;
  let fixture: ComponentFixture<DadosCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosCarroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
