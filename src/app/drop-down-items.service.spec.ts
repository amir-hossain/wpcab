import { TestBed, inject } from '@angular/core/testing';

import { DropDownItemsService } from './drop-down-items.service';

describe('DropDownItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropDownItemsService]
    });
  });

  it('should be created', inject([DropDownItemsService], (service: DropDownItemsService) => {
    expect(service).toBeTruthy();
  }));
});
