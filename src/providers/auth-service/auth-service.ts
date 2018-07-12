import { environment } from './../../_env/globalVariable';
import { User } from './../../_model/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  constructor(public http: HttpClient) {}
  login(credentials) {
    return this.http.post<any>(
      environment.apiUrl + environment.login,
      credentials.map((res: any) => {
        // login successful if there's a jwt token in the response

        if (res && res.token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', res.token);
        }
      })
    );
  }
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
