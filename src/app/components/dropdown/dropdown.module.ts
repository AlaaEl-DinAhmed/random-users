import { NgModule } from '@angular/core';
import { CheckboxComponentModule } from '@components/checkbox/checkbox.module';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  imports: [CheckboxComponentModule],
  exports: [DropdownComponent],
  declarations: [DropdownComponent],
  providers: [],
})
export class DropDownComponentModule {}
