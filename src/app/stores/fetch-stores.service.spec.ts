import { TestBed } from '@angular/core/testing';

import { FetchStoresService } from './fetch-stores.service';

describe('FetchStoresService', () => {
  let service: FetchStoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchStoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
