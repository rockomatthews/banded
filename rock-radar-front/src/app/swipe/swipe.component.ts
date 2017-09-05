import { User } from "../user/user";
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.css']
})
export class SwipeComponent implements OnInit {
  @Input() users;
  constructor() { }

  ngOnInit() {
  }

}
