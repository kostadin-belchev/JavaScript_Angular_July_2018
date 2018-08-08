import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/furniture.model';
import { FurnitureService } from '../furniture.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  bindingModel: FurnitureModel

  constructor(
    private furnitureService: FurnitureService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.furnitureService.getFurnitueById(this.route.snapshot.params['id']).subscribe((data) => {
      this.bindingModel = data
    })
  }

  edit() {
    this.furnitureService.editFurniture(this.bindingModel.id, this.bindingModel).subscribe()
  }

}
