import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memoryConvertPipe'
})
export class MemoryConvertPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    console.log("size of the memory is : "+value); // 1000
    console.log("format to be convered to : "+args[0]); // MB / TB / GB 

    switch(args[0]){
      case 'MB': 
        return value / 1024; 
        break;
      case 'GB' : 
        return value / (1024*1024) ; 
        break;
      case 'TB' : 
        return value / (1024* 1024 * 1024) ; 
        break;
      default : 
        return value;
        break;
    }
  }

}
