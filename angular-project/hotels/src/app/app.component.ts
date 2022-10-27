import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'qweqweqweqwe';

  constructor() {
    setTimeout(() => {
      this.title = 'new title';
    }, 2000);
  }
}
