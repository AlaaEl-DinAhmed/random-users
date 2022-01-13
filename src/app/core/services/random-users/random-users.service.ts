import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRandomUsersResponse } from '@interfaces/random-users-response';
import { environment } from 'environments/environment';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  map,
  Observable,
  shareReplay,
  switchMap,
} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RandomUsersService {
  genderFilter = new BehaviorSubject('');
  genderFilter$ = this.genderFilter.asObservable();

  natFilter = new BehaviorSubject('');
  natFilter$ = this.natFilter.asObservable();

  users$ = combineLatest([
    this.genderFilter$.pipe(
      map((genderFilter: string) => genderFilter.toLowerCase())
    ),
    this.natFilter$,
  ]).pipe(
    debounceTime(500),
    switchMap(([gender, nat]) => {
      return this.getUsers(gender, nat).pipe(
        map(({ results }) =>
          results.map((user) => ({
            name: user.name,
            gender: user.gender,
            location: user.location.country,
            dob: user.dob.age,
            email: user.email,
            registered: user.registered.date,
            phone: user.phone,
            picture: user.picture.thumbnail,
          }))
        )
      );
    }),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(private http: HttpClient) {}

  getUsers(gender = '', nat = ''): Observable<IRandomUsersResponse> {
    return this.http.get<IRandomUsersResponse>(environment.baseUrl, {
      params: {
        results: 300,
        gender,
        nat,
      },
    });
  }
}
