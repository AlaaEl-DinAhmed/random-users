import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SpinnerComponentModule } from '@components/spinner/spinner.module';
import { RandomUserNationalitiesService } from '@services/random-user-nationalities/random-user-nationalities.service';
import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, SpinnerComponentModule, MatTableModule],
  exports: [TableComponent],
  declarations: [TableComponent],
  providers: [RandomUserNationalitiesService],
})
export class TableComponentModule {}
