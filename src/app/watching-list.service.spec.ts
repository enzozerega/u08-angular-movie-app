import { TestBed } from '@angular/core/testing';

import { WatchingListService } from './watching-list.service';

describe('WatchingListService', () => {
  let service: WatchingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
