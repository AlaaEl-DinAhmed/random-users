import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponentModule } from '@components/spinner/spinner.module';
import { UserNamePipeModule } from 'app/pipes/user-name/user-name.module';
import { DateDifferencePipeModule } from './../../pipes/date-difference/date-difference.module';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
    SpinnerComponentModule,
    UserNamePipeModule,
    DateDifferencePipeModule,
  ],
  exports: [TableComponent],
  declarations: [TableComponent],
})
export class TableComponentModule {}
