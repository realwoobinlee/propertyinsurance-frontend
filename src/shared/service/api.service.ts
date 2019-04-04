import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Beitrag } from './beitrag.model';

@Injectable()
export class ApiService {
    private readonly BR_API_URL = "/api/"; // muss noch definiert bzw.implementiert werden
    private FINAL_URL: string;
    private anfrage: any;
    constructor(private http: HttpClient) {
    }
    // gegenstand (bike, smartphone, laptop)
    public getBeitrag(gegenstand:string, preis: number): Observable<Beitrag> {
        // muss noch implementiert werden
        this.FINAL_URL = this.BR_API_URL + gegenstand + "/contribution";
        this.anfrage = {price: preis};
        
        return this.http.post<Beitrag>(this.FINAL_URL ,JSON.stringify(this.anfrage));
    }
}