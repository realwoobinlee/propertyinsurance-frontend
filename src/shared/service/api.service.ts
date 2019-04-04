import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Beitrag } from './beitrag.model';
import { Enquiries } from './beitrag.model';

@Injectable()
export class ApiService {
    private readonly BR_API_URL = "https://ergo.oleb.it/api/"; // muss noch definiert bzw.implementiert werden
    private FINAL_URL: string;
    private anfrage: any;
    private anfrage_anf: any;
    private header: HttpHeaders;

    constructor(private http: HttpClient) {
        this.header = new HttpHeaders({'Content-Type': 'application/json'});
    }
    // gegenstand (bike, smartphone, laptop)
    public getBeitrag(gegenstand:string, preis: number): Observable<Beitrag[]> {
        // muss noch implementiert werden
        this.FINAL_URL = this.BR_API_URL + gegenstand + "/contribution";
        this.anfrage = {price: preis};
        var result = this.http.post<Beitrag[]>(this.FINAL_URL ,JSON.stringify(this.anfrage),{headers: this.header});
        return result;
    }

    public postAnforderung(values: Array<any>) {
        this.FINAL_URL = this.BR_API_URL + "insuranceEnquiries";
        console.log(values);
        this.anfrage_anf = {property: values[0], price: values[1], contractDuration: values[2],
                        salutation: values[3], firstName: values[4], lastName: values[5],
                        email: values[6], phoneNumber: values[7], birthDate: values[8],
                        address: values[9], postalCode: values[10], city: values[11], country: values[12]};

        console.log(this.anfrage_anf);
        
        var result = this.http.post<Enquiries>(this.FINAL_URL,JSON.stringify(this.anfrage_anf),{headers: this.header});

        return result;
    }
}