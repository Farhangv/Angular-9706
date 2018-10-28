import * as moment from 'jalali-moment';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'persianDate'
})
export class PersianDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    try
    {
      let MomentDate = moment(value, 'YYYY/MM/DD');
      return MomentDate.locale('fa').format('YYYY/MM/DD');
    }
    catch
    {
      return "تاریخ غیر معتبر";
    }
  }
}
