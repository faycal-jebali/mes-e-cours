import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoursesService } from "../../shared/services/courses.service";
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
    private CoursesService: CoursesService,
    private userService: UserService,
    private readonly notificationService: NotificationService,
    private readonly authService: AuthService
  ) {}

  ngOnInit() {
    this.CoursesService.getCourse(this.route.snapshot.params["id"]).subscribe(
      (data: {}) => {
        console.log(data);
        this.product = data;
      }
    );

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
          console.log("Attach Course OK : ", data);
        },
        (error) => {
          this.notificationService.error(
            "Problème!",
            `Au niveau de l'attachement de la course`,
            error,
            true
          );
        }
      );
    console.log(`Attacher Course id  : `, id);
  }
}
