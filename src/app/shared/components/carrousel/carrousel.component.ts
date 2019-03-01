import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  itemsParPage = 4;
  @Input() titre: string;
  @Input() formations: any;

  slides: any = [[]];

  chunk(arr, chunkSize) {
    const R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    if (this.formations) {
      this.slides = this.chunk(this.formations, this.itemsParPage);
    }
  }
}
