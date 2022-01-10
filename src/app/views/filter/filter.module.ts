import { NgModule } from '@angular/core';
import { RandomUserNationalitiesService } from '@services/random-user-nationalities/random-user-nationalities.service';
import { DropDownComponentModule } from './../../components/dropdown/dropdown.module';
import { FilterComponent } from './filter.component';

@NgModule({
  imports: [DropDownComponentModule],
  exports: [FilterComponent],
  declarations: [FilterComponent],
  providers: [RandomUserNationalitiesService],
})
export class FilterComponentModule {}
