import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentagePipe'
})
export class PercentagePipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return "%"+ Number(value).toFixed(2);
  }

}
