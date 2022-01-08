import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@interfaces/user';
import { environment } from 'environments/environment';
import { delay, map, Observable } from 'rxjs';

@Injectable()
export class RandomUserNationalitiesService {
  constructor(private http: HttpClient) {}

  getNationalities(): Observable<any> {
    return this.http.get(environment.apiUrl).pipe(
      delay(500),
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
