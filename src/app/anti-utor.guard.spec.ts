import { TestBed, async, inject } from '@angular/core/testing';

import { AntiUtorGuard } from './anti-utor.guard';

describe('AntiUtorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AntiUtorGuard]
    });
  });

  it('should ...', inject([AntiUtorGuard], (guard: AntiUtorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
