import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountantNavComponent } from './accountant-nav.component';

describe('AccountantNavComponent', () => {
  let component: AccountantNavComponent;
  let fixture: ComponentFixture<AccountantNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountantNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountantNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
