import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translatePipe'
})
export class TranslatePipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    switch(args[0]){
      case 'fr' : 
        return 'Bonjour, bienvenue au MCIT';
        break;
      case 'en': 
        return 'Welcome to MCIT';
        break;
      case 'es' : 
        return 'Hola, bienvenido a MCIT';
        break;
      case 'zh' : 
        return 'some chinese ';
        break;
        
      default : 
      break;
    }
  }

}
