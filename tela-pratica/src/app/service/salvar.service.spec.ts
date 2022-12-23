/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SalvarService } from './salvar.service';

describe('Service: Salvar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalvarService]
    });
  });

  it('should ...', inject([SalvarService], (service: SalvarService) => {
    expect(service).toBeTruthy();
  }));
});
