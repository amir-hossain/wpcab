import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuleNavComponent } from './sule-nav.component';

describe('SuleNavComponent', () => {
  let component: SuleNavComponent;
  let fixture: ComponentFixture<SuleNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuleNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
