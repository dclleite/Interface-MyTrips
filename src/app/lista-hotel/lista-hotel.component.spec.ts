import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHotelComponent } from './lista-hotel.component';

describe('ListaHotelComponent', () => {
  let component: ListaHotelComponent;
  let fixture: ComponentFixture<ListaHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
