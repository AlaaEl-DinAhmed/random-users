import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RandomUsersService } from './random-users.service';

describe('RandomUsersService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let randomUsersService: RandomUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RandomUsersService],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    randomUsersService = new RandomUsersService(httpClientSpy);
  });

  it('should be created', () => {
    expect(randomUsersService).toBeTruthy();
  });

  it('Should call get nationalities method', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of([]));

    randomUsersService.getUsers().subscribe(() => done());

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });
});
