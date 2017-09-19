import { inject, TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('Auth Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [AuthService]});
  });

  it('should ...', inject([AuthService], (api) => {
    expect(api.title).toBe('Angular 2');
  }));
});
