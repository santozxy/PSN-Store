import { TestBed } from '@angular/core/testing';

import { DataGamesService } from './data-games.service';

describe('DataGamesService', () => {
  let service: DataGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
