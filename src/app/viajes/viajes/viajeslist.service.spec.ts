import { TestBed } from '@angular/core/testing';

import { ViajeslistService } from './viajeslist.service';

describe('ViajeslistService', () => {
  let service: ViajeslistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajeslistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
