import { TestBed } from '@angular/core/testing';

import { CliBackendService } from './cli-backend.service';

describe('CliBackendService', () => {
  let service: CliBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CliBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
