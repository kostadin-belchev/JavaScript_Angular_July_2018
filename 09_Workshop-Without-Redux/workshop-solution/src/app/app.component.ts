import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCJrK1D-InOAlU0VjT4AOB_rEXw1ER3d3s",
      authDomain: "ng-recipes-b4ab1.firebaseapp.com"
    })
  }

}
