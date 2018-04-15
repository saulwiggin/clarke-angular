import { Component,OnInit } from '@angular/core';
import { DataService } from "./service/data.service";

@Component({
  selector: 'hiking-store',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    path = "assets/json/backpacks.json";

    constructor( private service: DataService ) {}

    ngOnInit() {
        this.service.getData( this.path )
        .subscribe( packs => console.table( packs ));
    }
}
