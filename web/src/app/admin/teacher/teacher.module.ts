import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexModule} from "./index/index.module";
import {CourseRoutingModule} from "./teacher-routing.module";

/**
 * 课程管理
 */

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    IndexModule,
    CourseRoutingModule
  ]
})
export class TeacherModule { }
