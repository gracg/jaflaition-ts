import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollar'
})
export class DollarPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return "$"+Number(value).toFixed(2);
  }

}
