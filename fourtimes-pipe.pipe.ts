import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fourtimesPipe'
})
export class FourtimesPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value * value * value * value;
  }

}
