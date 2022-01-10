import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class RandomUserNationalitiesService {
  genderFilter = new BehaviorSubject('');
  genderFilter$ = this.genderFilter.asObservable();

  natFilter = new BehaviorSubject('');
  natFilter$ = this.natFilter.asObservable();

  constructor(private http: HttpClient) {}

  getNationalities(gender = '', nat = ''): Observable<any> {
    return this.http.get(environment.baseUrl, {
      params: {
        results: 500,
        gender,
        nat,
      },
    });
  }
}
