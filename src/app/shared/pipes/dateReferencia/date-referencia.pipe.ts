import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateReferencia'
})
export class DateReferenciaPipe implements PipeTransform {

    transform(value: any): any {
     let response:string ="";
      let strg = value;
      let strgMes= strg.split(" ")[0]
      let strgAno = strg.split(" ")[2]; 
     
      response = strgMes+ "/"+ strgAno ;
     return response

    }     
}
