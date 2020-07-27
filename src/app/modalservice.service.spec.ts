/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ModalserviceService } from './modalservice.service';

describe('ModalserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalserviceService]
    });
  });

  it('should ...', inject([ModalserviceService], (service: ModalserviceService) => {
    expect(service).toBeTruthy();
  }));
});
