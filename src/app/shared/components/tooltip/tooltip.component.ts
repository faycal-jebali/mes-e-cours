import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: "shared-tooltip",
  templateUrl: "./tooltip.component.html",
  styleUrls: ["./tooltip.component.scss"],
})
export class ToolTipComponent implements OnInit {
  @ViewChild("tooltip") tooltip: MatTooltip;
  @Input("options") options = {
    text: "Info about the action",
  };

  constructor() {}

  ngOnInit() {}
}
