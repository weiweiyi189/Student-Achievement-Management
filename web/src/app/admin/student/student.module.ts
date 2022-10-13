import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentRoutingModule} from "./student-routing.module";
import {IndexModule} from "./index/index.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentRoutingModule,
    IndexModule
  ]
})
export class StudentModule { }
