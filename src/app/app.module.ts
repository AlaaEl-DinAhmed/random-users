import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponentModule } from '@views/filter/filter.module';
import { TableComponentModule } from '@views/table/table.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FilterComponentModule,
    TableComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
