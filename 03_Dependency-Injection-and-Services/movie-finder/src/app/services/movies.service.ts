import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzVmMDY2MWUzMDViOTU5ZDA1YjBkZTMwYzI1MWIwNyIsInN1YiI6IjViNTRiMDEwOTI1MTQxMWY4YzAzMDhiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IE3svsvldi2pGz_SePqgrB3Pc2crHrycMxHVeCYOB_g'

@Injectable()
export class MoviesService {
  path = 'https://api.themoviedb.org/3/'
  popular = 'discover/movie?sort_by=popularity.desc'
  authentication = '&api_key='
  
  constructor(private httpClient: HttpClient) { }
  
}