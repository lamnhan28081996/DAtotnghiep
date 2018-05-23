import { TestBed, inject } from '@angular/core/testing';

import { Add1Service } from './add1.service';

describe('Add1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Add1Service]
    });
  });

  it('should be created', inject([Add1Service], (service: Add1Service) => {
    expect(service).toBeTruthy();
  }));
});
