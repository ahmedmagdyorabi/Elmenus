import { TestBed } from '@angular/core/testing';

import { TastyOffersService } from './tasty-offers.service';

describe('TastyOffersService', () => {
  let service: TastyOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TastyOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
