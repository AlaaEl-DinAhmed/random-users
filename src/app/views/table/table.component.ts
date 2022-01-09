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
    combineLatest([
      this.randomUsersService.genderFilter$,
      this.randomUsersService.natFilter$,
    ])
      .pipe(debounceTime(500))
      .subscribe((filterValues: [string, string]) => {
        const gender = filterValues[0].toLowerCase();
        const nat = filterValues[1];
        this.getRandomUsers(gender, nat);
      });
  }

  ngOnDestroy(): void {
    this.randomUserSub?.unsubscribe();
  }

  getRandomUsers(genderFilterValues?: string, natFilterValues?: string): void {
    this.randomUsersService
      .getNationalities(genderFilterValues, natFilterValues)
      .subscribe((users: User[]) => {
        this.users = users;
        this.ref.markForCheck();
      });
  }
}
