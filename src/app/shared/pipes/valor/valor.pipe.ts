import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valor'
})
export class ValorPipe implements PipeTransform {

  transform(value: number): number{
    return Math.sqrt(value);
  }


}
