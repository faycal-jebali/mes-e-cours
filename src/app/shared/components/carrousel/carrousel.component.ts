import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shared-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  itemsParPage = 4;
  @Input() titre: string;

  liste = [
    {
      title: 'Formation compléte Développement web 1',
      ription: 'Some quick example text to',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      prix: '200 €',
      prixPromotion: '10 €',
    },
    {
      title: 'Formation compléte Développement web 2',
      ription: 'Some quick example text to',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      prix: '200 €',
      prixPromotion: '10 €',
    },
    {
      title: 'Formation compléte Développement web 3',
      ription: 'Some quick example text to',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      prix: '200 €',
      prixPromotion: '10 €',
    },
    {
      title: 'Formation compléte Développement web 4',
      ription: 'Some quick example text to',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      prix: '200 €',
      prixPromotion: '10 €',
    },
    {
      title: 'Formation compléte Développement web 5',
      ription: 'Some quick example text to',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      prix: '200 €',
      prixPromotion: '10 €',
    },
    {
      title: 'Formation compléte Développement web 6',
      ription: 'Some quick example text to',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      prix: '200 €',
      prixPromotion: '10 €',
    },
    {
      title: 'Formation compléte Développement web 7',
      ription: 'Some quick example text to',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      prix: '200 €',
      prixPromotion: '10 €',
    },
    {
      title: 'Formation compléte Développement web 8',
      ription: 'Some quick example text to',
      buttonText: 'Button',
      img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
      prix: '200 €',
      prixPromotion: '10 €',
    },
  ];

  slides: any = [[]];
  
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.liste, this.itemsParPage);
  }
}
