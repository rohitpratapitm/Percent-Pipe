import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  value: number = 5000;
  a: number = 0.259;
  b: number = 1.3495;
  locale: string = 'en';
  constructor() {
    this.locale= navigator.language;
  }
}
