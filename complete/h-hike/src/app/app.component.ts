import { Component } from '@angular/core';
import { DataService } from "./service/data.service";

import { Pack } from './pack/type.pack';

@Component({
  selector: 'hiking-store',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    packs:Pack[];
    path = "assets/json/backpacks.json";

    constructor( private ds: DataService ) {}

    ngOnInit() {
        this.getPacks();
        // this.getPacksWithPromise();
    }

    getPacks() {

        this.ds.getData( this.path )

        .subscribe(
            data => this.packs = data,
            e => this.error( e )
         )

    }

    getPacksWithPromise() {

         this.ds.getDataWithPromise( this.path )
         .then(
             data => this.packs = data,
             e => this.error( e )
          );
    }

    error( e ) {
        // HttpErrorResponse
        console.log( e.status, e.statusText );
    }
}
