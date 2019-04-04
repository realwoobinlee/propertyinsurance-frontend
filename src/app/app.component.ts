import { Component,OnInit } from '@angular/core';

import { ApiService } from '../shared/service/api.service';
import { Beitrag, Enquiries } from '../shared/service/beitrag.model';
import { KategorienGroup } from '../shared/kategorie/kategorie.service';
import { ValidatorService } from '../shared/service/validator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private beitraege: Beitrag[] = [];
  private enquiries: Array<any> = [null,null,null,null,null,null,null,null,null,null,null,null,null];
  private enq: Enquiries;
  private gegenstand: string;
  private preis: number = 0;
  private max: number = 5000;
  private min: number = 1;
  private answer_age:string = null;
  private _salutation: string;

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

  private postEnquiries() {
    this.apiservice.postAnforderung(this.enquiries).subscribe(
      (enq: Enquiries) => {
        this.enq = enq;
      }
    );
  }

  changePreis(value: number) {
    this.preis = value > 5000 ? 5000 : value;
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

  //------------------------------------------------------------------------------------
  private setfirstName(value: string) {
    this.enquiries[4] = value;
    this.enquiries[0] = this.gegenstand;
    this.enquiries[1] = this.preis;
    this.enquiries[2] = 1;
  }
  private setlastName(value: string) {
    this.enquiries[5] = value;
  }
  private setbirthDate(value: string) {
    var split = value.split('-');
    value = split[2]+'.'+split[1]+'.'+split[0];
    this.enquiries[8] = value;
  }
  private setaddress(value: string) {
    this.enquiries[9] = value;
  }
  private setpostalCode(value: number) {
    this.enquiries[10] = value;
  }
  private setcity(value: string) {
    this.enquiries[11] = value;
  }
  private setcountry(value: string) {
    this.enquiries[12] = value;
  }
  private setsalutaion(value: string) {
    this.enquiries[3] = value;
  }
  private setemail(value: string) {
    this.enquiries[6] = value;
  }
  private setphoneNumber(value: string) {
    this.enquiries[7] = value;
  }
}
