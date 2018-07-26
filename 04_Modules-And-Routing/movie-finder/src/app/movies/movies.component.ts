import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  title: string = 'Find a movie'
  popular: Movies
  theaters: Movies
  popularKids: Movies
  bestDramas: Movies
  searchResults: Movies

  constructor(private moviesService: MoviesService) { }

  search(query) {
    // console.log(query);
    if (query.search === '') {
      this.searchResults = undefined
      return
    }
    this.moviesService.findAMovie(query.search).subscribe(data => {
      this.searchResults = data
      // console.log(this.searchResults);
    })
  }

  ngOnInit() {
    this.moviesService.getPopular().subscribe((data) => {
      this.popular = data
      // console.log(data.result)
    })

    this.moviesService.inTheathers.subscribe(data => {
      this.theaters = data
      // console.log(this.theaters)
    })

    this.moviesService.getPopularKids().subscribe(data => {
      this.popularKids = data
      // console.log(this.popularKids)
    })

    this.moviesService.getBestDramas().subscribe(data => {
      this.bestDramas = data
    })
  }

}
