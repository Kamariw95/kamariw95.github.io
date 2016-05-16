import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
      <div id="home" class ="ui vertical segment">

      </div>
      <div id = "about" class ="ui vertical segment">
        <h1>About Me</h1>
        <h2>Hobbies</h2>
        <h2>Favorites</h2>
        <h2>Resume</h2>
      </div>
      <div id = "project" class ="ui vertical segment">
        <h1>Projects</h1>
      </div>
      <div id = "photos" class ="ui vertical segment">
        <h1>Photos</h1>
      </div>
      <div id = "contact" class ="ui vertical segment">
        <h1>Contact</h1>
      </div>
    `

})
export class AppComponent { }
