import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title: string = 'Browse our movies'
  popular: Movies
  theaters: Movies

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getPopular().subscribe((data) => {
      this.popular = data
      // console.log(data.result)
    })

    this.moviesService.inTheathers.subscribe(data => {
      this.theaters = data
      // console.log(this.theaters)
    })
  }

}
