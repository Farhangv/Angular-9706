import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : 'productCode'
})
export class ProductCodePipe implements PipeTransform {
  transform(value: string, newChar?: string) {
    if(newChar == '-' || !newChar)
    {
      newChar = ' ';
    }
    return value.replace('-', newChar);
  }
}
