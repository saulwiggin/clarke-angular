import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pack } from '../pack/type.pack';

@Injectable()
export class DataService {

  constructor( private http: HttpClient ) {}

    getData(path) {
        return this.http.get<Pack[]>( path )
    }

    getDataWithPromise( path ) {
        return this.http.get<Pack[]>( path ).toPromise();
    }

}
