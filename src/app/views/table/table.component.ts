import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IRandomUsersResponse } from '@interfaces/random-users-response';
import { IMappedUser, IUser } from '@interfaces/user';
import { RandomUserNationalitiesService } from '@services/random-user-nationalities/random-user-nationalities.service';
import { combineLatest, debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, OnDestroy {
  users: IMappedUser[] = [];
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
          .subscribe((response: IRandomUsersResponse) => {
            this.users = response.results.map((user: IUser) => ({
              name: user.name,
              gender: user.gender,
              location: user.location.country,
              dob: user.dob.age,
              email: user.email,
              registered: user.registered.date,
              phone: user.phone,
              picture: user.picture.thumbnail,
            }));
            this.ref.markForCheck();
          });
      });
  }
}
