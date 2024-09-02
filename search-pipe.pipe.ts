import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    console.log("contact list is : "+value); // contact array 
    console.log("search string is : "+args[0]); // 514

    if(args[0] == undefined || args[0]== ''){
      return value;
    }

    // declare an empty array 

    const matchStringArray : any = []; 

    // loop through the value array using for loop 

    value.forEach(function(el : any) {
        if(el.toString().toLowerCase().includes (args[0].toString().toLowerCase())){
          matchStringArray.push(el);
        }
    })

    return matchStringArray;

  }

}
