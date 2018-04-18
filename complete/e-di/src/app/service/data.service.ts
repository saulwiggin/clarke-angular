import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    path = "http://localhost:4000";
    // path = "assets/data/fruit.json";

    constructor( private http: HttpClient ) {}

    getFruit() : any {
         return this.http.get( this.path );
    }
}
