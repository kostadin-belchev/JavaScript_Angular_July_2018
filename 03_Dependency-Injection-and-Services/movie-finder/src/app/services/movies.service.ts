import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

// const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzVmMDY2MWUzMDViOTU5ZDA1YjBkZTMwYzI1MWIwNyIsInN1YiI6IjViNTRiMDEwOTI1MTQxMWY4YzAzMDhiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IE3svsvldi2pGz_SePqgrB3Pc2crHrycMxHVeCYOB_g'
const apiKey = 'fc5f0661e305b959d05b0de30c251b07'

@Injectable()
export class MoviesService {
  path = 'https://api.themoviedb.org/3'
  authentication = '&api_key='
  
  popular = '/discover/movie?sort_by=popularity.desc'
  inTheaters = '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
  
  constructor(private httpClient: HttpClient) { }
  
  getPopular() : Observable<Movies> {
    return this.httpClient.get<Movies>(this.path + this.popular + this.authentication + apiKey)
  }

  get inTheathers() : Observable<Movies> {
    return this.httpClient.get<Movies>(this.path + this.inTheaters + this.authentication + apiKey);
  }

}