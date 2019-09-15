import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 1;
  }

}
