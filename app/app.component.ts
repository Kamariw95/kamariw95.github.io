import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<img src="resources/images/main-photo.jpeg">`,
    styles: [`
      .ui.sidebar {
        position: fixed;
        z-index: 100;
      }
      `]
})
export class AppComponent { }
