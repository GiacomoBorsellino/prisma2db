import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

@NgModule({
  exports: [
    HttpClientModule
  ],
  declarations: [AppComponent],
  imports: [BrowserModule, NgApexchartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
