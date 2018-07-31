import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';

const appKey = "kid_B1u1BWq4Q" // APP KEY HERE;
const appSecret = "5ce0a76b9b2544df852260625918b310" // APP SECRET HERE;
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthenticationService {
  private createAuthHeaders(type: string): HttpHeaders {
    if (type === 'Basic') {
      return new HttpHeaders({
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      })
    } else if(type === 'Kinvey') {
      return new HttpHeaders({
        'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
        'Content-Type': 'application/json'
      })
    }
  }
  private currentAuthtoken: string

  constructor(private httpClient: HttpClient) { }

  get authtoken() {
    return this.currentAuthtoken
  }

  set authtoken(value: string) {
    this.currentAuthtoken = value
  }

  checkIfLoggedIn() {
    // return this.currentAuthtoken === localStorage.getItem('authtoken')
    return localStorage.getItem('authtoken') !== null
  }
  
  login(loginModel: LoginModel) {
    return this.httpClient.post(loginUrl, JSON.stringify(loginModel), {
      headers: this.createAuthHeaders('Basic')
    })
  }

  register(registerModel: RegisterModel) {
    return this.httpClient.post(registerUrl, JSON.stringify(registerModel), {
      headers: this.createAuthHeaders('Basic')
    })
  }

  logout() {
    return this.httpClient.post(logoutUrl,
      {},
      {
        headers: this.createAuthHeaders('Kinvey')
      })
  }
}