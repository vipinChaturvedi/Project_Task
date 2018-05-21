import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import {HomeComponent} from './HomeComponent/home.component';
import {DashBoradComponent} from './DashBoard/dashBoard.component';
import {NavBarComponent} from './navBar/navBar.component';
import {AppRoutingModule} from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashBoradComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
