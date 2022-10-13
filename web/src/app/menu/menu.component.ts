import {Component, OnInit, TemplateRef} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {ThyPopover, ThyPopoverConfig} from 'ngx-tethys/popover';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private activatedRoute: Router) {
    this.activatedRoute = activatedRoute;
  }

  routers = [] as string[];

  config = {
    placement: 'right',
    insideClosable: true
  } as ThyPopoverConfig;


  ngOnInit(): void {
  }


  logout() {
    this.activatedRoute.navigateByUrl('/login').then();
  }


}
