import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCidadeComponent } from './cadastro-cidade.component';

describe('CadastroCidadeComponent', () => {
  let component: CadastroCidadeComponent;
  let fixture: ComponentFixture<CadastroCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
