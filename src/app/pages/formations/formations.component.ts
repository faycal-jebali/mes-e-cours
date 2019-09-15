import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../../business-objects/formation';
import { FormationsService } from '../../services/formations.service';
@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  formations: Formation[];
  constructor(private formationsService: FormationsService) { }

  ngOnInit() {
    this.formationsService.getFormations().subscribe(
      (formations) => {
        this.formations = formations;
        console.log('FormationsComponent formations : ', this.formations);
      },
      (error) => {
        console.log('FormationsComponent getFormations() Erreur: ', this.formations);
      });
  }

}
