import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from "./admin-routing.module";
import {IndexModule} from "./student/index/index.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    IndexModule
  ]
})
export class AdminModule { }
