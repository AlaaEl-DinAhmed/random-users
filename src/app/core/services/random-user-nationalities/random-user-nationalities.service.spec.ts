import { TestBed } from '@angular/core/testing';
import { RandomUserNationalitiesService } from './random-user-nationalities.service';

describe('RandomUserNationalitiesService', () => {
  let service: RandomUserNationalitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomUserNationalitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
