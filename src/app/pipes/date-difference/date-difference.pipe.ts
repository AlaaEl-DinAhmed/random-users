import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDifference',
})
export class DateDifferencePipe implements PipeTransform {
  transform(value: string): unknown {
    const currentDate = new Date().getFullYear();
    const date = new Date(value).getFullYear();

    return currentDate - date;
  }
}
