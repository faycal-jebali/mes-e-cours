import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'shared-loading-water-wave',
  templateUrl: './loading-water-wave.component.html',
  styleUrls: ['./loading-water-wave.component.scss']
})
export class LoadingWaterWaveComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
    const  cnt = document.getElementById("count");
    const water = document.getElementById("water");
    let percent = Number(cnt.innerText);
    let interval;
    interval = setInterval(function(){
      percent ++;
      cnt.innerHTML = percent.toString();
      water.style.transform = `translate( 0 , ${( 98 - Number(percent))}%)`;
      if (percent === 98) {
        clearInterval(interval);
      }
    }, 60);
  }
}
