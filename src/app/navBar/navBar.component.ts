import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navBar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class NavBarComponent {
  login_id:string="vipin.chaturvedi099@gmail.com";

  constructor(private router: Router){

  }

  ngOnInit(){

  }

  redirectingHome(){

    this.router.navigate(['home']);
  }

  redirectingDashBoard(){

    this.router.navigate(['dashboard']);
  }

}
