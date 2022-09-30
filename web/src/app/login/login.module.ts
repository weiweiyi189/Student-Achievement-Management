import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {ThyLayoutModule} from "ngx-tethys/layout";
import {ThyCardModule} from "ngx-tethys/card";
import {ThyNavModule} from "ngx-tethys/nav";
import {ThyInputModule} from "ngx-tethys/input";
import {ThyButtonModule} from "ngx-tethys/button";



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ThyLayoutModule,
    ThyCardModule,
    ThyNavModule,
    ThyInputModule,
    ThyButtonModule
  ]
})
export class LoginModule { }
