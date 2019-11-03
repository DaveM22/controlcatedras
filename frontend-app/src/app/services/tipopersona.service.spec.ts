import { TestBed } from '@angular/core/testing';

import { TipopersonaService } from './tipopersona.service';

describe('TipopersonaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipopersonaService = TestBed.get(TipopersonaService);
    expect(service).toBeTruthy();
  });
});
