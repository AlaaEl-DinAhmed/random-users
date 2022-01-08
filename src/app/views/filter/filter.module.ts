import { NgModule } from '@angular/core';
import { DropDownComponentModule } from '@components/dropdown/dropdown.module';
import { FilterComponent } from './filter.component';

@NgModule({
  imports: [DropDownComponentModule],
  exports: [FilterComponent],
  declarations: [FilterComponent],
  providers: [],
})
export class FilterComponentModule {}
