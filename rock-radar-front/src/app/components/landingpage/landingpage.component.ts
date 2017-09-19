import { Component } from '@angular/core';

@Component({
  selector: 'landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingPageComponent {
   constructor() {}
   title: string = 'Landing page here';
}