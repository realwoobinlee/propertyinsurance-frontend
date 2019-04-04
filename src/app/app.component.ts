import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public width: any;

  constructor() {
  }
  ngOnInit() {
    this.width = window.innerWidth;
  }
}
