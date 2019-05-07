import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDetalhesHotelComponent } from './dialog-detalhes-hotel.component';

describe('DialogDetalhesHotelComponent', () => {
  let component: DialogDetalhesHotelComponent;
  let fixture: ComponentFixture<DialogDetalhesHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDetalhesHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDetalhesHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
