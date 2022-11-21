import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import {ThyFormModule} from "ngx-tethys/form";
import {ThyInputModule} from "ngx-tethys/input";
import {ThyIconModule} from "ngx-tethys/icon";
import {ThyButtonModule} from "ngx-tethys/button";
import {ThySelectModule} from "ngx-tethys/select";



@NgModule({
  declarations: [
    AddComponent
  ],
  exports: [
    AddComponent
  ],
  imports: [
    CommonModule,
    ThyFormModule,
    ThyInputModule,
    ThyIconModule,
    ThyButtonModule,
    ThySelectModule
  ]
})
export class AddModule { }
