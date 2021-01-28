import { Component, OnInit } from "@angular/core";

import { Formation } from "../../shared/business-objects/formation";
import { FormationsService } from "../../shared/services/formations.service";

@Component({
  selector: "app-formations",
  templateUrl: "./formations.component.html",
  styleUrls: ["./formations.component.scss"],
})
export class FormationsPageComponent implements OnInit {
  formations: Formation[];
  constructor(private formationsService: FormationsService) {}

  ngOnInit() {
    this.formationsService.getFormations().subscribe(
      (formations) => {
        this.formations = formations;
        console.log("FormationsPageComponent formations : ", this.formations);
      },
      (error) => {
        console.log(
          "FormationsPageComponent getFormations() Erreur: ",
          this.formations
        );
      }
    );
  }
}
