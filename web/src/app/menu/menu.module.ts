import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu.component';
import {ThyGridModule} from "ngx-tethys/grid";
import {ThyMenuModule} from "ngx-tethys/menu";
import {ThyDividerModule} from "ngx-tethys/divider";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ThyNavModule} from "ngx-tethys/nav";
import {ThyActionMenuModule} from "ngx-tethys/action-menu";
import {ThyButtonModule} from "ngx-tethys/button";
import {ThyIconModule} from "ngx-tethys/icon";
import {ThyLayoutModule} from "ngx-tethys/layout";
import {RouterModule} from "@angular/router";
import {ThyDropdownModule} from "ngx-tethys/dropdown";
import {ThyBreadcrumbModule} from "ngx-tethys/breadcrumb";
import {ThyAvatarModule} from 'ngx-tethys/avatar';
import {ThyTooltipModule} from 'ngx-tethys/tooltip';
import {ThyBadgeModule} from 'ngx-tethys/badge';
import {ThyPopoverModule} from 'ngx-tethys/popover';
import {LoginModule} from '../login/login.module';
import {ThyActionModule} from "ngx-tethys/action";

/**
 * 菜单
 */

@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    ThyGridModule,
    ThyMenuModule,
    ThyDividerModule,
    BrowserAnimationsModule,
    ThyNavModule,
    ThyActionMenuModule,
    ThyButtonModule,
    ThyIconModule,
    ThyLayoutModule,
    RouterModule,
    ThyDropdownModule,
    ThyBreadcrumbModule,
    ThyAvatarModule,
    ThyTooltipModule,
    ThyBadgeModule,
    ThyPopoverModule,
    LoginModule,
    ThyActionModule
  ]
})
export class MenuModule {
}
