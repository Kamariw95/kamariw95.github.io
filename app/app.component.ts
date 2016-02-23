import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
    <div class = "ui one column grid">
      <div class ="site-sect column" id="home">
        <!--<img class="photo" src="resources/images/nyc.jpeg"/>-->
      </div>
      <div class ="site-sect column" id="about">
        <!--<img class="photo" src="resources/images/city-2.jpg"/>-->
      </div>
      <!--<div class ="site-sect column" id="blog">
        <img class="photo" src="resources/images/city-7.jpg"/>
      </div>-->
      <div class ="site-sect column" id="project">
        <!--<img class="photo" src="resources/images/city-6.jpg"/>-->
      </div>
      <div class ="site-sect column" id="photos">
        <!--<img class="photo" src="resources/images/city-8.jpg"/>-->
      </div>
      <div class ="site-sect column" id="contact">
        <!--<img class="photo" src="resources/images/city-4.jpg"/>-->
      </div>
    </div>
    `

})
export class AppComponent { }
