import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConvertorPipe'
})
export class CurrencyConvertorPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    console.log("Entered amount is : "+value);
    console.log("the currency format is  : "+args[0]);

    switch(args[0]){
      case 'CAD' : 
        return 'CA$ '+value*1.25;
        break;
      case 'EUR': 
        return 'EU$ '+value*0.94;
        break;
      case 'AUD' : 
        return 'AU$ '+value*1.05;
        break;
      default : 
        return 'US$ '+value;
      
    }
    
  }

}
