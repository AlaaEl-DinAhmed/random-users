import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { User } from '@interfaces/user';
import { RandomUserNationalitiesService } from '@services/random-user-nationalities/random-user-nationalities.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'picture',
    'name',
    'gender',
    'location',
    'email',
    'currentAge',
    'registrationSeniority',
    'phoneNumber',
  ];
  dataSource: User[] = [];
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
    this.randomUsersService.getNationalities().subscribe((users: User[]) => {
      this.dataSource = users;
      this.ref.markForCheck();
    });
  }
}
