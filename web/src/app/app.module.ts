import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from "./login/login.module";
import {MenuModule} from "./menu/menu.module";
import {ThyIconRegistry} from "ngx-tethys/icon";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconRegistry: ThyIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/defs/svg/sprite.defs.svg`));
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/symbol/svg/sprite.symbol.svg`));
  }
}
