import { Component,OnInit } from '@angular/core';

import { ApiService } from '../shared/service/api.service';
import { Beitrag } from '../shared/service/beitrag.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private ersteauswahl: string[] = ["Hobby- & Sportgeräte", "Kommunikationselektronik", "Unterhaltungselektronik & Computer",
    "Musikinstrumente"];
  private beitrag: Beitrag[] = [];

  public width: any;

  constructor(private apiservice: ApiService) {
  }
  ngOnInit() {
    this.width = window.innerWidth;
  }
}
