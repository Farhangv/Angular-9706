import * as moment from 'jalali-moment';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'persianDate'
})
export class PersianDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let MomentDate = moment(value, 'YYYY/MM/DD');
    return MomentDate.locale('fa').format('YYYY/MM/DD');
  }
}
