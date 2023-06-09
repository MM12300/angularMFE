import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MfeModule} from "./mfe/mfe.module";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MfeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
