import { NgModule } from '@angular/core';
import { RandomUsersService } from '@services/random-users/random-users.service';
import { DropDownComponentModule } from './../../components/dropdown/dropdown.module';
import { FilterComponent } from './filter.component';

@NgModule({
  imports: [DropDownComponentModule],
  exports: [FilterComponent],
  declarations: [FilterComponent],
  providers: [RandomUsersService],
})
export class FilterComponentModule {}
