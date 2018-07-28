import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register.model';
import { AuthenticationService } from '../services/authentication.service';

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
  constructor(private authService: AuthenticationService) { 
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
    }, err => {
      console.log(err.description)
      this.errorDescription = err.description
      this.registerFailed = true
    })
  }

  get diagnostics() {
    return JSON.stringify(this.model)
  }
}
