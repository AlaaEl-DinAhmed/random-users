import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponentModule } from '@components/spinner/spinner.module';
import { RandomUserNationalitiesService } from '@services/random-user-nationalities/random-user-nationalities.service';
import { UserNamePipeModule } from 'app/pipes/user-name/user-name.module';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule,
    SpinnerComponentModule,
    UserNamePipeModule,
  ],
  exports: [TableComponent],
  declarations: [TableComponent],
  providers: [RandomUserNationalitiesService],
})
export class TableComponentModule {}
