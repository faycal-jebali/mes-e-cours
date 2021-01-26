import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class ToolTipComponent implements OnInit {
  @Input('options') options = {
    text: 'Info about the action',
  };

  constructor() { }

  ngOnInit() { }

}
