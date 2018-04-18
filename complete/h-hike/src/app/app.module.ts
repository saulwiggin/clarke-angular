import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DataService } from './service/data.service';
import {HttpClientModule} from '@angular/common/http';
import { PackComponent } from './pack/pack.component';

@NgModule({
  declarations: [
    AppComponent,
    PackComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
