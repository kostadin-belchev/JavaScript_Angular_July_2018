import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel
  loginFailed: boolean = false
  errorDescription: string

  constructor(private authService: AuthenticationService, private router: Router) { this.model = new LoginModel('', '') }

  ngOnInit() {
  }

  login() {
    console.log('Logging in...')
    this.authService.login(this.model).subscribe((data) => this.successfulLogin(data), err => {

    })
  }

  successfulLogin(data) {
    this.authService.authtoken = data._kmd.authtoken
    localStorage.setItem('authtoken', data._kmd.authtoken)
    localStorage.setItem('username', data.username)
    this.router.navigate(['/home'])
  }


  get diagnostics() {
    return JSON.stringify(this.model)
  }

}
