import { NgModule } from '@angular/core';
import { CheckboxComponentModule } from '@components/checkbox/checkbox.module';
import { RandomUserNationalitiesService } from '@services/random-user-nationalities/random-user-nationalities.service';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  imports: [CheckboxComponentModule],
  exports: [DropdownComponent],
  declarations: [DropdownComponent],
  providers: [RandomUserNationalitiesService],
})
export class DropDownComponentModule {}
