import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squarePipe'
})
export class SquarePipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value * value;
  }

}
