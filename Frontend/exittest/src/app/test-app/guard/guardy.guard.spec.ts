import { TestBed } from '@angular/core/testing';

import { GuardyGuard } from './guardy.guard';

describe('GuardyGuard', () => {
  let guard: GuardyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
