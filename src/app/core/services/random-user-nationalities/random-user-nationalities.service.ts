import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@interfaces/user';
import { environment } from 'environments/environment';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable()
export class RandomUserNationalitiesService {
  genderFilter = new BehaviorSubject('');
  genderFilter$ = this.genderFilter.asObservable();
  natFilter = new BehaviorSubject('');
  natFilter$ = this.natFilter.asObservable();
  constructor(private http: HttpClient) {}

  getNationalities(gender = '', nat = ''): Observable<any> {
    return this.http
      .get(environment.baseUrl, {
        params: {
          results: 500,
          gender,
          nat,
        },
      })
      .pipe(
        map((response: any) => {
          return response.results.map((user: User) => ({
            picture: user.picture.thumbnail,
            name: user.name.first,
            gender: user.gender,
            location: user.location.country,
            email: user.email,
            currentAge: user.registered.age,
            registrationSeniority: user.registered.date,
            phoneNumber: user.phone,
          }));
        })
      );
  }
}
