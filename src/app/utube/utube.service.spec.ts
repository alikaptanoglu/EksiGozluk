import { TestBed } from '@angular/core/testing';

import { UtubeService } from './utube.service';

describe('UtubeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtubeService = TestBed.get(UtubeService);
    expect(service).toBeTruthy();
  });
});
