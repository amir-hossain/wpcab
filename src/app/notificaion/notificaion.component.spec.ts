import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificaionComponent } from './notificaion.component';

describe('NotificaionComponent', () => {
  let component: NotificaionComponent;
  let fixture: ComponentFixture<NotificaionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificaionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
