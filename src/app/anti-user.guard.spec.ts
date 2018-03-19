import { TestBed, async, inject } from '@angular/core/testing';

import { AntiUserGuard } from './anti-user.guard';

describe('AntiUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AntiUserGuard]
    });
  });

  it('should ...', inject([AntiUserGuard], (guard: AntiUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
