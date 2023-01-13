import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public isLoading: boolean = false;

  public ngOnInit(): void {}

  public find(array: number[], item: number): number | undefined {
    let result: number | undefined;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        result = array[i];
        break;
      }
    }
    return result;
  }

  public operations(a: number): number {
    a + 1; // 1
    a + 5; // 1
    a * 2; // 1
    return a;
  }
}
