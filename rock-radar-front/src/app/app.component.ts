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

  optionsSideNav = {
    edge: "right"
  }
  
}

$(document).ready(function(e) {
  $('ul.tabs').tabs({'swipeable': true});
  $("select").material_select({"stopPropagation":true});
});
