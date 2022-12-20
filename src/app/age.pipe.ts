import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: number, ...args: any[]) {
    console.log( value);
    // return value;
    // let currentYear: any = new Date().getFullYear();
    // console.log(value)
    // let birthYear: any = new Date(value).getFullYear();
    // let age = currentYear - birthYear;
    // return age + '';
  }
}