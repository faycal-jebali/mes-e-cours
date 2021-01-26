import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCarrouselComponent } from './item-carrousel/item-carrousel.component';

@Component({
  selector: 'shared-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent implements OnInit {
  itemsParPage = 4;
  @Input() titre: string;
  @Input() formations: any;

  slides: any = [[]];

  constructor(
    private router: Router,
  ) {

  }

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

  /**
   * Get Détails Formation
   */
  getFormation(id: number) {
    console.log('Formation : ', id);
  }
}
