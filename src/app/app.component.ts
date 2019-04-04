import { Component,OnInit } from '@angular/core';

import { ApiService } from '../shared/service/api.service';
import { Beitrag } from '../shared/service/beitrag.model';
import { KategorienGroup } from '../shared/kategorie/kategorie.service';
import { ValidatorService } from '../shared/service/validator.service';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private beitraege: Beitrag[] = [];
  private gegenstand: string;
  private preis: number;
  private max: number = 5000;
  private min: number = 1;
  private answer_age:string = null;
  
  public width: any;

  constructor(private apiservice: ApiService,
              private kategoriegroup: KategorienGroup,
              private validatorservice: ValidatorService) {
    /* test
    this.gegenstand = "bike";
    this.preis = 1000;
    */
  }

  ngOnInit() {
    this.width = window.innerWidth;
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

  changePreis(value: number) {
    this.preis = value;
    if(this.kategoriegroup.productauswahl === "Fahrrad") {
      this.gegenstand = "bike";
    } else if (this.kategoriegroup.productauswahl === "Smartphone" || "Handy") {
      this.gegenstand = "smartphone";
    } else if (this.kategoriegroup.productauswahl === "Laptop") {
      this.gegenstand = "laptop";
    }
    this.getBeitrag();
    console.log(this.beitraege);
    
  }

  private setAlert(value: string) {
    this.kategoriegroup.setAlert(value);
    this.answer_age = value;
  }
}
