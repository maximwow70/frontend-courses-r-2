import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPipe',
})
export class MyCustomPipePipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return value.replace('sad :(', 'happy :)');
  }
}
