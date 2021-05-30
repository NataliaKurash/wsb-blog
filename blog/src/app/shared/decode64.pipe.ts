import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'decode'
  })
  export class Decode64Pipe implements PipeTransform {
    transform(value: any, args?: any): any {
      let a = '';
      if(value){
         a = atob(value);
         a.replace(/^"/, '')
         a.replace(/"$/, '')
      }
      return a;
    }
  }