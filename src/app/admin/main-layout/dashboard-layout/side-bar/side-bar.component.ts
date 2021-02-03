import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "bk-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"],
})
export class SideBarComponent implements OnInit {
  @Input() auth;
  constructor() {}

  ngOnInit(): void {}
}
