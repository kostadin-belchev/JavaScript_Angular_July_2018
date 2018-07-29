import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  // isLoggedIn: boolean = this.authService.checkIfLoggedIn()
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().subscribe(() => {
      console.log('Logout successful!')
      // clear localStorage
      localStorage.clear()
      this.authService.authtoken = ''
      this.router.navigate(['/login'])
    }, err => {
      console.log(err)
    })
  }

}
