import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import {ThyPaginationModule} from "ngx-tethys/pagination";
import {ThyIconModule} from "ngx-tethys/icon";
import {ThyButtonModule} from "ngx-tethys/button";
import {ThyCardModule} from "ngx-tethys/card";
import {ThyInputModule} from "ngx-tethys/input";
import {ThySpaceModule} from "ngx-tethys/space";

/**
 * 课程管理分页
 */

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    ThyPaginationModule,
    ThyIconModule,
    ThyButtonModule,
    ThyCardModule,
    ThyInputModule,
    ThySpaceModule,
  ]
})
export class IndexModule { }
