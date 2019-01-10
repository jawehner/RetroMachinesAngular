import { TestBed } from '@angular/core/testing';

import { WishlistsService } from './wishlists.service';

describe('WishlistsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WishlistsService = TestBed.get(WishlistsService);
    expect(service).toBeTruthy();
  });
});
