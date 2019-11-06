import { TestBed } from '@angular/core/testing';

import { TumSaticilarService } from './tum-saticilar.service';

describe('TumSaticilarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TumSaticilarService = TestBed.get(TumSaticilarService);
    expect(service).toBeTruthy();
  });
});
