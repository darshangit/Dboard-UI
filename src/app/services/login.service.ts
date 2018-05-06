import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Login } from '../models/login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class LoginService {

    isUserAuthenticated = false;
    userName: string;

    constructor(private httpClient: HttpClient, private router: Router) { }

    isValidUser(login: Login): Observable<boolean> {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };

        return this.httpClient.post<boolean>('http://' + 'localhost' + ':6061/dboard/login/authenticate', login, httpOptions);
    }

    setValidUser(userName) {
        this.userName = userName;
        this.isUserAuthenticated = true;
    }

    getIsValidUser() {
        return this.isUserAuthenticated;
    }

    getIsAOP() {
        return this.userName === 'DASH';
    }

    getUserName() {
        return this.userName;
    }

    signOut() {
        this.userName = null;
        this.isUserAuthenticated = false;
        this.router.navigate(['/app-login']);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
