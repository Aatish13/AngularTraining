import { TestBed } from '@angular/core/testing';

import { LogSService } from './log-s.service';

describe('LogSService', () => {
  let service: LogSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
