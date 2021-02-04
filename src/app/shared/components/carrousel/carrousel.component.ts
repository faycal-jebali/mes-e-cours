import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "shared-carrousel",
  templateUrl: "./carrousel.component.html",
  styleUrls: ["./carrousel.component.scss"],
})
export class CarrouselComponent implements OnInit {
  itemsParPage = 4;
  @Input() titre: string;
  @Input() data: any;

  slides: any = [[]];

  constructor(private router: Router) {}

  chunk(arr, chunkSize) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    if (this.data) {
      this.slides = this.chunk(this.data, this.itemsParPage);
    }
  }
}
