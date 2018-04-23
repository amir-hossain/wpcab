import { TestBed, inject } from '@angular/core/testing';

import { NavLinksService } from './nav-links.service';

describe('NavLinksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavLinksService]
    });
  });

  it('should be created', inject([NavLinksService], (service: NavLinksService) => {
    expect(service).toBeTruthy();
  }));
});
