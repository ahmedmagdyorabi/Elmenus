import { TestBed } from '@angular/core/testing';

import { ResturantDataService } from './resturant-data.service';

describe('ResturantDataService', () => {
  let service: ResturantDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResturantDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
