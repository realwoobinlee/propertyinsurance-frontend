import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Beitrag } from './beitrag.model';

@Injectable()
export class ApiService {
    private readonly BR_API_URL = "https://ergo.oleb.it/api/"; // muss noch definiert bzw.implementiert werden
    private FINAL_URL: string;
    private anfrage: any;
    private header: HttpHeaders;
    private Enquiries = { "property": "Smartphone",
                          "price": "200",
                          "contractDuration": 3,
                          "salutation": "Herr",
                          "firstName": "Bernd",
                          "lastName": "Brot",
                          "email":"realwoobinlee@gmail.com",
                          "phoneNumber":"123/321",
                          "birthDate":"22.12.2222",
                          "address":"hier",
                          "postalCode":"22041",
                          "city":"Hamburg",
                          "country":"Algerien"}

    constructor(private http: HttpClient) {
        this.header = new HttpHeaders({'Content-Type': 'application/json'});
    }
    // gegenstand (bike, smartphone, laptop)
    public getBeitrag(gegenstand:string, preis: number): Observable<Beitrag[]> {
        // muss noch implementiert werden
        this.FINAL_URL = this.BR_API_URL + gegenstand + "/contribution";
        this.anfrage = {price: preis};
        
        return this.http.post<Beitrag[]>(this.FINAL_URL ,JSON.stringify(this.anfrage),{headers: this.header});
    }

    public postAnforderung() {
        this.FINAL_URL = this.BR_API_URL + "insuranceEnquiries";
        this.http.post(this.FINAL_URL,{},{headers: this.header});
    }
}