import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GENDERS } from '@constants/gender';
import { NATIONALITIES } from '@constants/nationalities';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  nationalities = NATIONALITIES;
  gender = GENDERS;
  nationalitiesFormControl = new FormControl();
  genderFormControl = new FormControl();

  constructor() {}

  getValues(event: Event) {
    console.log(event);
  }
}
