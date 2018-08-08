import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/furniture.model';
import { FurnitureService } from '../furniture.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../authentication/auth.service';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnitures: Observable<FurnitureModel[]>
  pageSize: number = 3
  currentPage: number = 1

  constructor(
    private furnitureService: FurnitureService,
    private authService: AuthService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.furnitures = this.furnitureService.getAllFurniture()
  }

  pageChanged(page) {
    this.currentPage = page
  }

  deleteItem(id: number) {
    this.furnitureService.deleteFurniture(id).subscribe(() => {
      this.furnitures = this.furnitureService.getAllFurniture()
      // this.toastrService.success('Furniture deleted!', 'Success!')
    })
  }

}
