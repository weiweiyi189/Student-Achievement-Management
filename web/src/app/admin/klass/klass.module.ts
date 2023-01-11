import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {KlassRoutingModule} from "./klass-routing.module";
import {IndexModule} from "./index/index.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KlassRoutingModule,
    IndexModule
  ]
})
export class KlassModule { }
