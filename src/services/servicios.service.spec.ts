import { TestBed } from '@angular/core/testing';

import { Servicios } from './servicios.service';

describe('ServiciosService', () => {
  let service: Servicios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servicios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
