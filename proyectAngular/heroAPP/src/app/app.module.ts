import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from "./app.routes";
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { PoderComponent } from './poder/poder.component';
import { HomeComponent } from './home/home.component';
import {MasterUrlService} from "./Service/master-url.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    PoderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    MasterUrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
