import { TestBed, async, inject } from '@angular/core/testing';

import { AccountantGuard } from './accountant.guard';

describe('AccountantGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountantGuard]
    });
  });

  it('should ...', inject([AccountantGuard], (guard: AccountantGuard) => {
    expect(guard).toBeTruthy();
  }));
});
