import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../../business-objects/formation';
import { FormationsService } from '../../services/formations.service';
@Component({
  selector: 'app-formations-page',
  templateUrl: './formations-page.component.html',
  styleUrls: ['./formations-page.component.scss']
})
export class FormationsPageComponent implements OnInit {
  formations: Formation[];
  constructor(private formationsService: FormationsService) { }

  ngOnInit() {
    this.formationsService.getFormations().subscribe(
      (formations) => {
        this.formations = formations;
        console.log('FormationsPageComponent formations : ', this.formations);
      },
      (error) => {
        console.log('FormationsPageComponent getFormations() Erreur: ', this.formations);
      });
  }

}
