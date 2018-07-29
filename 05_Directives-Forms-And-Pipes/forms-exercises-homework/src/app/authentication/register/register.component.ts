import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegisterModel
  registerFailed: boolean = false
  errorDescription: string
  // unamePattern: string = '^[A-Z]\w*$'
  constructor(private authService: AuthenticationService, private router: Router) { 
    this.model = new RegisterModel('', '', '', '', '', 18)
  }

  ngOnInit() {
  }

  register() {
    console.log('Registering...')
    delete this.model['confirmPassword']
    this.authService.register(this.model).subscribe((data) => {
      console.log('Registration successful!')
      console.log(data)
      this.router.navigate(['/home'])
    }, err => {
      console.log(err)
      this.errorDescription = err.error.description
      this.registerFailed = true
    })
  }

  get diagnostics() {
    return JSON.stringify(this.model)
  }
}
