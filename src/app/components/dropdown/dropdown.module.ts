import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule],
  exports: [DropdownComponent],
  declarations: [DropdownComponent],
  providers: [],
})
export class DropDownComponentModule {}
