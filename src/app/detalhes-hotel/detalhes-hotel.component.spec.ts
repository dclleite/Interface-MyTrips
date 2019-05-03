import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesHotelComponent } from './detalhes-hotel.component';

describe('DetalhesHotelComponent', () => {
  let component: DetalhesHotelComponent;
  let fixture: ComponentFixture<DetalhesHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhesHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
