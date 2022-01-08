import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatSelectModule],
  exports: [CheckboxComponent],
  declarations: [CheckboxComponent],
  providers: [],
})
export class CheckboxComponentModule {}
