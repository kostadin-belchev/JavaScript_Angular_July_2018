import { Component, OnInit } from '@angular/core';
import { CreateFurnitureModel } from '../models/create-furniture.model';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  bindingModel: CreateFurnitureModel

  constructor() {
    this.bindingModel = new CreateFurnitureModel('', '', undefined, '', undefined, '')
  }

  ngOnInit() {
  }

  create() {
    console.log('Creating...')
  }

}
