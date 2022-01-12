import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GENDERS } from '@constants/gender';
import { NATIONALITIES } from '@constants/nationalities';
import { RandomUserNationalitiesService } from '@services/random-user-nationalities/random-user-nationalities.service';

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

  constructor(
    private randomUserNationalitiesService: RandomUserNationalitiesService
  ) {}

  getGenderFilterValues(event: string[]): void {
    this.randomUserNationalitiesService.genderFilter.next(event.join(','));
  }

  getNatFilterValues(event: string[]): void {
    this.randomUserNationalitiesService.natFilter.next(event.join(','));
  }
}
