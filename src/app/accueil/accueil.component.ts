import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../business-objects/formation';
import { FormationsService } from '../services/formations.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  formations: Formation[];

  constructor(
    private formationsService: FormationsService,
    ) { }

  ngOnInit() {
    this.formationsService.getFormations().subscribe(
      (formations) => {
        this.formations = formations;
        console.log('AccueilComponent formations : ', this.formations);
      },
      (error) => {
        console.log('AccueilComponent getFormations() Erreur: ', this.formations);
      });
  }
}
