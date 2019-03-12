import { TestBed } from '@angular/core/testing';

import { Air4thaiService } from './air4thai.service';

describe('Air4thaiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Air4thaiService = TestBed.get(Air4thaiService);
    expect(service).toBeTruthy();
  });
});
