import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHotelComponent } from './cadastro-hotel.component';

describe('CadastroHotelComponent', () => {
  let component: CadastroHotelComponent;
  let fixture: ComponentFixture<CadastroHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
