import { TestBed } from '@angular/core/testing';

import { LogincodeService } from './logincode.service';

describe('LogincodeService', () => {
  let service: LogincodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogincodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
