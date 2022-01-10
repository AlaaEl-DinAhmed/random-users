import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { User } from '@interfaces/user';
import { RandomUserNationalitiesService } from '@services/random-user-nationalities/random-user-nationalities.service';
import { combineLatest, debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, OnDestroy {
  users: User[] = [];
  randomUserSub!: Subscription;

  constructor(
    private ref: ChangeDetectorRef,
    private randomUsersService: RandomUserNationalitiesService
  ) {}

  ngOnInit(): void {
    this.getRandomUsers();
  }

  ngOnDestroy(): void {
    this.randomUserSub?.unsubscribe();
  }

  getRandomUsers(): void {
    combineLatest([
      this.randomUsersService.genderFilter$,
      this.randomUsersService.natFilter$,
    ])
      .pipe(debounceTime(500))
      .subscribe((filterValues: [string, string]) => {
        const gender = filterValues[0].toLowerCase();
        const nat = filterValues[1];
        this.randomUsersService
          .getNationalities(gender, nat)
          .subscribe((response: any) => {
            this.users = response.results.map((user: User) => ({
              picture: user.picture.thumbnail,
              name: user.name.first,
              gender: user.gender,
              location: user.location.country,
              email: user.email,
              currentAge: user.registered.age,
              registrationSeniority: user.registered.date,
              phoneNumber: user.phone,
            }));
            this.ref.markForCheck();
          });
      });
  }
}
