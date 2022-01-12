import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName',
})
export class UserNamePipe implements PipeTransform {
  transform(value: { title: string; first: string; last: string }): unknown {
    return `${value.title}. ${value.first} ${value.last}`;
  }
}
