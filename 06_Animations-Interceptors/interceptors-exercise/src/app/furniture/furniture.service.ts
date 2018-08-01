import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { CreateFurnitureModel } from './models/create-furniture.model';
import { FurnitureModel } from './models/furniture.model';

const createUrl = 'http://localhost:5000/furniture/create'
const allUrl = 'http://localhost:5000/furniture/all'
const detailsUrl = 'http://localhost:5000/furniture/details/' // + id
const myUrl = 'http://localhost:5000/furniture/my'
const deleteUrl = 'http://localhost:5000/furniture/delete/' // + id

@Injectable()
export class FurnitureService {
  constructor(private httpClient: HttpClient) { }
  
  createFurniture(body: CreateFurnitureModel) {
    return this.httpClient.post(createUrl, body) // no need to attach headers since we have implemented interceptors
  }

  getAllFurniture() {
    return this.httpClient.get<FurnitureModel[]>(allUrl);
  }

  getFurnitureDetails(id: number) {
    return this.httpClient.get<FurnitureModel>(detailsUrl + id);
  }

  getMyFurniture() {
    return this.httpClient.get<FurnitureModel[]>(myUrl);
  }

  deleteFurniture(id: number) {
    return this.httpClient.delete(deleteUrl + id);
  }
}