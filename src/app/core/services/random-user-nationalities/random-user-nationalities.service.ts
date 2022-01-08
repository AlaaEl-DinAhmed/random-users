import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class RandomUserNationalitiesService {
  constructor(private http: HttpClient) {}

  getNationalities(): Observable<any> {
    return this.http.get(environment.apiUrl);
  }
}
