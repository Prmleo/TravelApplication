import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Constant } from '../constant';

import { AuthenticateService } from '../services/authenticate.service';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  login: any = {
  };

  constructor(public router: Router, public authenticate: AuthenticateService,public user:UserService) { }

  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');

    this.loginCheck();
  }

  ngOnDestroy(){
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
    
  }
  loginCheck(){

    if (sessionStorage.getItem('token')) {
      this.router.navigate(['/new']);
    }
  }

  loginUser(){
    alert(this.login.email);
    alert(this.login.password);
    this.authenticate.login(this.login.email, this.login.password).subscribe(religions => {
      this.router.navigate(['/new']);
      alert("login successfully");
     });
  }

}
