import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { FurnitureModel } from '../models/furniture.model';
import { Observable } from '../../../../node_modules/rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  furnitures: Observable<FurnitureModel[]>

  constructor(private furnitureService: FurnitureService, private router: Router) { }

  ngOnInit() {
    this.furnitures = this.furnitureService.getMyFurniture()
  }

  delete(id: number) {
    this.furnitureService.deleteFurniture(id).subscribe()
    // this.toastr.success('Furniture deleted successfully!', 'Success!')
    // this.router.navigate(['/furniture/all'])
  }

}
