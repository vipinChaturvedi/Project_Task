import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashBoradComponent} from './DashBoard/dashBoard.component';
import {HomeComponent} from './HomeComponent/home.component';
import {NavBarComponent} from './navBar/navBar.component';

const routes: Routes = [
  { path: '',  component: NavBarComponent },
  { path: 'dashboard',  component: DashBoradComponent },
  { path: 'home',  component: HomeComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
