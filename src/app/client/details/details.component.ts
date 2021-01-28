import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormationsService } from "../../shared/services/formations.service";
import { UserService } from "../../shared/services/user.service";
import { NotificationService } from "../../shared/components/notification/notification.service";
import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  product: any;
  panelOpenState = false;
  currentUser: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formationsService: FormationsService,
    private userService: UserService,
    private readonly notificationService: NotificationService,
    private readonly authService: AuthService
  ) {}

  ngOnInit() {
    this.formationsService
      .getFormation(this.route.snapshot.params["id"])
      .subscribe((data: {}) => {
        console.log(data);
        this.product = data;
      });

    this.authService.currentUser.subscribe((data) => {
      console.log("Current User :: ", data);
      this.currentUser = data;
    });
  }

  attachTraining(id) {
    this.userService
      .attachTraining({ user: this.currentUser._id, training: id })
      .subscribe(
        (data) => {
          if (data && data.body.success) {
            // Add File
            this.notificationService.success(
              "Félicitaions!",
              data.body.message
            );
          }
          console.log("Attach Formation OK : ", data);
        },
        (error) => {
          this.notificationService.error(
            "Problème!",
            `Au niveau de l'attachement de la formation`,
            error,
            true
          );
        }
      );
    console.log(`Attacher Formation id  : `, id);
  }
}
