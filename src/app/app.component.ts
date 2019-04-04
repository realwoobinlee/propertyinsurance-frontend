import { Component,OnInit } from '@angular/core';

import { ApiService } from '../shared/service/api.service';
import { Beitrag } from '../shared/service/beitrag.model';
import { KategorienGroup } from '../shared/kategorie/kategorie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private beitraege: Beitrag[] = [];
  private gegenstand: string;
  private preis: number;
  
  public width: any;

  constructor(private apiservice: ApiService, private kategoriegroup: KategorienGroup) {
    /* test
    this.gegenstand = "bike";
    this.preis = 1000;
    */
  }

  ngOnInit() {
    this.width = window.innerWidth;
    this.getBeitrag();
  }

  private getBeitrag() {
    this.apiservice.getBeitrag(this.gegenstand, this.preis).subscribe(
      (beitraege: Beitrag[]) => {
        this.beitraege = beitraege.map((beitrag: Beitrag) => {
          // Erweiterungsmöglichkeit
          return beitrag;
        });
      }
    )
  }
}
