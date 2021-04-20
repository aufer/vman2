import { Pipe, PipeTransform } from '@angular/core';
import { DateUtils }           from '../util';

@Pipe({
  name: 'hToI'
})
export class HToIPipe implements PipeTransform {
  transform(value: any, ...args): any {
    if (!value) return '00:00';
    return DateUtils.hToIString(+value);
  }
}
