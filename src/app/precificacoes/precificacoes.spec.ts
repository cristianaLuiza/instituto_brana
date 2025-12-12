import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Precificacoes } from './precificacoes';

describe('Precificacoes', () => {
  let component: Precificacoes;
  let fixture: ComponentFixture<Precificacoes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Precificacoes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Precificacoes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
