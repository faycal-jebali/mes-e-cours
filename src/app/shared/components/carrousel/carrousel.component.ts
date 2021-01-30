import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ItemCarrouselComponent } from "./item-carrousel/item-carrousel.component";

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
    console.log("carrousel :: ", this.data.length);
    if (this.data) {
      this.slides = this.chunk(this.data, this.itemsParPage);
      console.log("slides :: ", this.slides);
    }
  }

  /**
   * Get Détails Course
   */
  getCourse(id: number) {
    console.log("Course : ", id);
  }
}
