import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import * as firebase from 'firebase'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string

  constructor(
    private toastrService: ToastrService,
    private router: Router
  ) { }
  
  sighUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(data => {
      console.log(data)
      this.toastrService.success('Registered successfully.', 'Success')
      this.router.navigate(['/auth/signin'])
    }).catch(err => this.toastrService.error(err.message, 'Warning'))
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(data => {
      console.log(data)
      firebase.auth().currentUser.getIdToken().then((token: string) => this.token = token)
      this.toastrService.success('Logged in successfully.', 'Success')
      this.router.navigate(['/recipes'])
    }).catch(err => this.toastrService.error(err.message, 'Warning'))
  }

  signOut() {
    firebase.auth().signOut().then(() => {
      this.toastrService.success('Logged out successfully.', 'Success')
      this.router.navigate(['/auth/signin'])
      this.token = null
    }).catch(err => this.toastrService.error(err.message, 'Warning'))
  }

  getToken() { // refresh the token
    firebase.auth().currentUser.getIdToken().then((token: string) => this.token = token)
    return this.token
  }

  isAuthenticated() {
    return this.token != null
  }
}