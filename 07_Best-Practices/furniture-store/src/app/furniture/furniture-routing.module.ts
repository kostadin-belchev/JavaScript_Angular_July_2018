import { NgModule } from "../../../node_modules/@angular/core";
import { RouterModule, Routes } from "../../../node_modules/@angular/router";
import { AllFurnitureComponent } from "./all-furniture/all-furniture.component";
import { FurnitureDetailsComponent } from "./furniture-details/furniture-details.component";
import { MyFurnitureComponent } from "./my-furniture/my-furniture.component";
import { CreateFurnitureComponent } from "./create-furniture/create-furniture.component";
import { EditFurnitureComponent } from "./edit-furniture/edit-furniture.component";

const furnitureRoutes: Routes = [
  { path: 'create', component: CreateFurnitureComponent },
  { path: 'all', component: AllFurnitureComponent },
  { path: 'details/:id', component: FurnitureDetailsComponent},
  { path: 'mine', component: MyFurnitureComponent},
  { path: 'delete/:id', component: MyFurnitureComponent},
  { path: 'edit/:id', component: EditFurnitureComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(furnitureRoutes)
  ],
  exports: [ RouterModule ]
})

export class FurnitureRoutingModule {  }