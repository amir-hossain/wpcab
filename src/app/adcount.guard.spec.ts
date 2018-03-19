import { TestBed, async, inject } from '@angular/core/testing';

import { AdcountGuard } from './adcount.guard';

describe('AdcountGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdcountGuard]
    });
  });

  it('should ...', inject([AdcountGuard], (guard: AdcountGuard) => {
    expect(guard).toBeTruthy();
  }));
});
