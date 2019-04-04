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

    public postAnforderung() {
        this.FINAL_URL = this.BR_API_URL + "insuranceEnquiries";
        this.http.post(this.FINAL_URL,{},{headers: this.header});
    }
}