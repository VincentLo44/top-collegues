import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value >= 0) {
      value = "+ " + value;
    }
    return value;
  }

}
