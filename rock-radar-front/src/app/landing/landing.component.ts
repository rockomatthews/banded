import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true}); 
});