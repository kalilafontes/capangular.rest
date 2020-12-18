import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separarPalavras'
})
export class SepararPalavrasPipe implements PipeTransform {

  transform(value: any): any {
    let response:string ="";
     let strg = value;
     
     let strgResto = strg.substring(4, 15);
    
     response = strg.split(" ")[0] + "-" + strg.split(" ")[1] ;
    return response

   }   

}
