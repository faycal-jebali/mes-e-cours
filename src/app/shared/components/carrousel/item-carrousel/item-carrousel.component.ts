import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-carrousel',
  templateUrl: './item-carrousel.component.html',
  styleUrls: ['./item-carrousel.component.scss']
})
export class ItemCarrouselComponent implements OnInit {
@Input('card') card;
@Input('classStyle') classStyle = 'col-lg-4 col-md-6 mb-4';
  constructor() { }

  ngOnInit() { }

}
