import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decodeURIComponent'
})
export class DecodeURIComponentPipe implements PipeTransform {
  
  transform (input: any) {
    
    if (typeof input !== 'string') {
      return input;
    }
    
    return decodeURIComponent(input);
  }
}