import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationsService } from '../../services/formations.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  product:any;
panelOpenState = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formationsService: FormationsService,
  ) { }

  ngOnInit() {
    this.formationsService.getFormation(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.product = data;
    });
  }

}