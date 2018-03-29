import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Constant } from '../constant';



@Injectable()
export class AuthenticateService {

  constructor(private http: Http) { } 

  login(username: string, password: string) {
    alert(JSON.stringify ("3"+username));
    alert(JSON.stringify ("4"+password));
    return this.http.get(Constant.baseUrl+'oauth/token?grant_type=password&client_id=restapp&client_secret=restapp&username='+username+'&password='+password)    
    .map((response: Response) => {   
        alert(JSON.stringify("5"+username));
        alert(JSON.stringify ("6"+password));
            // login successful if there's a jwt token in the response
            let tok = response.json();            
           alert("13");
            if (tok && tok.value) { 
                alert("14");               
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('token', tok.value);
            }
            return response;
        }).catch((err) => {            
            // Do messaging and error handling here
            alert("Login Failed Try Again");
            return Observable.throw(err)
        });
  }

logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('token');
}

}
