import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<div class="ui sidebar inverted vertical menu">
      <a class="item">Home</a>
      <a class="item">About Me</a>
      <a class="item disabled">Blog</a>
      <a class="item">
        Projects <!--Add various projects in a dropdown here -->
      </a>
      <a class="item">Photos</a>
      <a class="item">Contact</a>
    </div>'
})
export class AppComponent { }
