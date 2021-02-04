import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent implements OnInit {
  @ViewChild("sidenav") sidenav: ElementRef;

  clicked: boolean;

  constructor(public auth: AuthService, public router: Router) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {}

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(["/"]);
  }
}
