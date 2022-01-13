import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GENDERS } from '@constants/gender';
import { NATIONALITIES } from '@constants/nationalities';
import { RandomUsersService } from '@services/random-users/random-users.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  nationalities = NATIONALITIES;
  genders = GENDERS;
  nationalitiesFormControl = new FormControl();
  genderFormControl = new FormControl();

  constructor(private randomUsersService: RandomUsersService) {}

  emitGenderFilterValues(event: string[]): void {
    this.randomUsersService.genderFilter.next(event.join(','));
  }

  emitNatFilterValues(event: string[]): void {
    this.randomUsersService.natFilter.next(event.join(','));
  }
}
