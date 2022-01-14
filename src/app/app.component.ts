import { Component, OnInit } from '@angular/core';
import { RandomUsersService } from '@services/random-users/random-users.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  genderFilter$ = this.randomUsersService.genderFilter$;
  natFilter$ = this.randomUsersService.natFilter$;
  genderFilteredValues = '';
  natFilteredValues = '';

  constructor(private randomUsersService: RandomUsersService) {}

  ngOnInit(): void {
    this.getFilterValues();
  }

  getFilterValues(): void {
    this.genderFilter$.subscribe(
      (value: string) => (this.genderFilteredValues = value)
    );
    this.natFilter$.subscribe(
      (value: string) => (this.natFilteredValues = value)
    );
  }

  get downloadUrl(): string {
    return `${environment.baseUrl}?format=csv&gender=${this.genderFilteredValues}&nat=${this.natFilteredValues}`;
  }
}
