import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./shared/services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  selectedValue = "";
  items = [
    { value: "0", view: "zero" },
    { value: "1", view: "one" },
    { value: "2", view: "Two" },
  ];

  constructor(private auth: AuthService, private router: Router) {}
}
