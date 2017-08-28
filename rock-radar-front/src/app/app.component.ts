import { Component } from '@angular/core';
declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private hideNavbar() {
    $(".nav-extended").hide();
  }

  optionsSideNave = {
    edge: "right"
  }
  
}

$(document).ready(function() {  
    $('select').material_select();
  });

