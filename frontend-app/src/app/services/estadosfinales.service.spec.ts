import { TestBed } from '@angular/core/testing';

import { EstadosfinalesService } from './estadosfinales.service';

describe('EstadosfinalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstadosfinalesService = TestBed.get(EstadosfinalesService);
    expect(service).toBeTruthy();
  });
});
