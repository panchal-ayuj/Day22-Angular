import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
providedIn:  'root'
})

export class HttpService {

constructor(private http: HttpClient) { }

getGifts(): Observable<String[]> {
	//return this.http.get(this.url);
    return of(["Portable BT Speaker", "Portable Charger"]);
}
}