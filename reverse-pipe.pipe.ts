import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    
    console.log("From pipe : "+value); // MCIT

    return value.split('').reverse().join(''); // TICM
    
    // return "Welcome !!!";
  }

}
