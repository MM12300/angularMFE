import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";
import {loadRemoteModule} from "@angular-architects/module-federation";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'mfe1',
        loadChildren: () => loadRemoteModule({
          remoteEntry: 'http://localhost:4200/remoteEntry.js',
          remoteName: 'mfe1',
          exposedModule: './MfeModule',
        }).then(m => m.MfeModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
