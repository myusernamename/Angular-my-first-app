import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cubePipe'
})
export class CubePipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value * value * value;
  }

}
