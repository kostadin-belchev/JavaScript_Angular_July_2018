import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

// const readAccessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzVmMDY2MWUzMDViOTU5ZDA1YjBkZTMwYzI1MWIwNyIsInN1YiI6IjViNTRiMDEwOTI1MTQxMWY4YzAzMDhiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IE3svsvldi2pGz_SePqgrB3Pc2crHrycMxHVeCYOB_g'
// const apiKey = 'fc5f0661e305b959d05b0de30c251b07'
const API_KEY = 'fc5f0661e305b959d05b0de30c251b07'

@Injectable()
export class MoviesService {
  path = 'https://api.themoviedb.org/3'
  authentication = '&api_key='
  movieAuthentication = '?api_key='
  
  popular = '/discover/movie?sort_by=popularity.desc'
  inTheaters = '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
  kids = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc'
  bestDramas = '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10'

  constructor(private httpClient: HttpClient) { }
  
  getPopular() : Observable<Movies> {
    return this.httpClient.get<Movies>(this.path + this.popular + this.authentication + API_KEY)
  }

  get inTheathers() : Observable<Movies> {
    return this.httpClient.get<Movies>(this.path + this.inTheaters + this.authentication + API_KEY);
  }

  getPopularKids() : Observable<Movies> {
    return this.httpClient.get<Movies>(this.path + this.kids + this.authentication + API_KEY);
  }

  getBestDramas() : Observable<Movies> {
    return this.httpClient.get<Movies>(this.path + this.bestDramas + this.authentication + API_KEY);
  }

  getMovie(id: string) : Observable<Movie> {
    return this.httpClient.get<Movie>(this.path + `/movie/${id}` + this.movieAuthentication + API_KEY);
  }

  findAMovie(query: string) : Observable<Movies> {
    return this.httpClient.get<Movies>(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=` + query);
  }

}