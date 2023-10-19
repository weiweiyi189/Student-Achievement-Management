import { Component, OnInit } from '@angular/core';
import {ThyNotifyService} from "ngx-tethys/notify";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  test: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    return;
  }

  login() {
    this.router.navigateByUrl('/admin/student').then();
  }

}
