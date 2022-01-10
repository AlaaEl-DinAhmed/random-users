import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RandomUserNationalitiesService } from './random-user-nationalities.service';

describe('RandomUserNationalitiesService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: RandomUserNationalitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RandomUserNationalitiesService],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new RandomUserNationalitiesService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should call get nationalities method', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of([]));

    service.getNationalities().subscribe(() => done());

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
