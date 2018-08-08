import { NgModule } from "@angular/core";
import { furnitureComponents } from "./index";
import { FormsModule } from "@angular/forms";
import { FurnitureService } from "./furniture.service";
import { FurnitureRoutingModule } from "./furniture-routing.module";
import { CommonModule } from "../../../node_modules/@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ...furnitureComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    FurnitureRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    FurnitureService
  ]
})

export class FurnitureModule {  }