import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoursesService } from "../../shared/services/courses.service";
import { UserService } from "../../shared/services/user.service";
import { NotificationService } from "../../shared/components/notification/notification.service";
import { AuthService } from "../../shared/services/auth.service";
import { SelectItem } from "../../shared/models/select-item";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-details-course",
  templateUrl: "./details-course.component.html",
  styleUrls: ["./details-course.component.scss"],
})
export class DetailsCourseComponent implements OnInit {
  product: any;
  panelOpenState = false;
  currentUser: any;
  currentLesson: any;
  listeOptions: SelectItem[];
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CoursesService: CoursesService,
    private userService: UserService,
    private readonly notificationService: NotificationService,
    private readonly authService: AuthService,
    private fb: FormBuilder,
    private translate: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang("fr");

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use("fr");

    this.listeOptions = [
      { id: 1, name: "item 1" },
      { id: 2, name: "item 2" },
      { id: 3, name: "item 3" },
      { id: 4, name: "item 4" },
      { id: 5, name: "item 5" },
    ];

    this.form = this.fb.group({
      chapiters: [[], Validators.required],
    });
  }

  ngOnInit() {
    this.CoursesService.getCourse(this.route.snapshot.params["id"]).subscribe(
      (data: {}) => {
        if (data) {
          console.log(data);
          this.product = data;
          this.currentLesson = this.product.chapiters[0].lessons[0];
        }
      }
    );

    this.authService.currentUser.subscribe((data) => {
      console.log("Current User :: ", data);
      this.currentUser = data;
    });
  }

  isChecked(lesson) {
    return this.currentLesson === lesson;
  }

  updateCheckedOptions(lesson, event) {
    console.log("ID :: ", lesson._id);
    this.currentLesson = lesson;
  }
}
