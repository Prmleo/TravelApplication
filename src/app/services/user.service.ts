import{ Injectable } from '@angular/core';
import{ Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Http,Response,Headers,RequestOptions } from'@angular/http';
import { Constant } from '../constant';
import { Request } from '@angular/http/src/static_request';
import {ApiRelationModel}from '../Models/relationModel';

@Injectable()
export class UserService{
  constructor(public http:Http){
        }
        RegisterPerson(user:any):Observable<any>
        {
         // alert ("gng to post"+JSON.stringify(user));
          let url = Constant.baseUrl+'api/all/saveTravelDetail';
          let headers =new Headers({'Content-Type ' : 'application/JSON'});
          let options = new RequestOptions ({ headers : headers });
          return this.http.post(url,user)
          .map (res => <any> res.json()); 
        }
        saveUserDetails(user:any):Observable<any>
        {
          //alert("hi im here");
          alert ("gng to post"+JSON.stringify(user));
          console.log("gng to post"+JSON.stringify(user));
          let url = Constant.baseUrl+'api/all/saveTravelInformation';
          let headers =new Headers({'Content-Type ' : 'application/JSON'});
          let options = new RequestOptions ({ headers : headers });
          return this.http.post(url,user)
          .map (res => <any> res.json()); 
        }
        sendMode(Mode:any):Observable<any>
        {
          //alert("hi im here");
          alert ("gng to post"+JSON.stringify(Mode));
          console.log("gng to post"+JSON.stringify(Mode));
          let url = Constant.baseUrl+'api/all/want to get from tamil';
          let headers =new Headers({'Content-Type ' : 'application/JSON'});
          let options = new RequestOptions ({ headers : headers });
          return this.http.post(url,Mode)
          .map (res => <any> res.json()); 
        }
       
}