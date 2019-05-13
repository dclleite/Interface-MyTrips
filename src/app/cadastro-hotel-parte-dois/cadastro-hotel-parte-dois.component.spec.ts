import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroHotelParteDoisComponent } from './cadastro-hotel-parte-dois.component';

describe('CadastroHotelParteDoisComponent', () => {
  let component: CadastroHotelParteDoisComponent;
  let fixture: ComponentFixture<CadastroHotelParteDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroHotelParteDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroHotelParteDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
