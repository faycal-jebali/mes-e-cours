import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FileUploader } from "ng2-file-upload";

import { NotificationService } from "../../../shared/components/notification/notification.service";
import { CategoryService } from "../../../shared/services/category.service";
import { CoursesService } from "../../../shared/services/courses.service";
import { UserService } from "../../../shared/services/user.service";

const UploadURL = "http://localhost:5100/api/courses/upload";
@Component({
  selector: "admin-edit-course",
  templateUrl: "./edit-course.component.html",
  styleUrls: ["./edit-course.component.scss"],
})
export class EditCourseComponent implements OnInit {
  configEditor = { toolbar: ["heading", "|", "bold", "italic"] };
  public Editor = ClassicEditor;
  title = "Upload a File";
  idCourse: String;
  courseData = null;
  public uploader: FileUploader = new FileUploader({
    url: UploadURL,
    itemAlias: "uploaded",
  });

  @Input() productData = {
    prod_name: "Test Title",
    prod_desc: "Test Descrip",
    prod_price: 160,
  };
  courseForm: FormGroup;
  selectedFile: File;
  allTrainers = [];
  allCategories = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private CoursesService: CoursesService,
    private notificationService: NotificationService,
    private userService: UserService,
    private categoryService: CategoryService
  ) {}

  /**
   * NgOnInit
   */
  ngOnInit() {
    this.idCourse = this.route.snapshot.paramMap.get("id");
    this.getCourse(this.idCourse);
    console.log("idFomation : ", this.idCourse);
    this.courseForm = this.formBuilder.group({
      trainer: [null, Validators.required],
      statut: [false, Validators.required],
      title: ["", Validators.required],
      description: null,
      price: ["", Validators.required],
      promotionPrice: null,
      categoriesId: ["", Validators.required],
      image: [""],
      chapiters: this.formBuilder.array([]),
    });

    // Upload Files
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    this.uploader.onCompleteItem = (
      item: any,
      response: any,
      status: any,
      headers: any
    ) => {
      console.log("FileUpload:uploaded item:", item);
      console.log("FileUpload:uploaded status:", status);
      console.log("FileUpload:uploaded response:", response);
      // alert('File uploaded successfully');
    };

    this.userService.getAllUsers().subscribe(
      (data) => {
        if (data) {
          this.allTrainers = data;
        }
      },
      (error) => {
        console.log("Get Trainers Error :: ", error);
      }
    );

    this.categoryService.getCategories().subscribe(
      (data) => {
        if (data) {
          this.allCategories = data;
        }
      },
      (error) => {
        console.log("Get Catégories Error :: ", error);
      }
    );
  }

  getNameUser(user) {
    const last = user.identity.lastname;
    const first = user.identity.firstname;
    const civility = user.identity.civility;
    let name = "";
    if (civility) {
      name += `${civility}`;
    }
    if (last) {
      name += `${last} `;
    }
    if (first) {
      name += `${first}`;
    }
    return name;
  }

  getCourse(id) {
    this.CoursesService.getCourse(id).subscribe(
      (result) => {
        console.log("get Course : ", result);
        this.courseData = result;
        if (this.courseData && this.courseData.chapiters.length > 0) {
          this.courseData.chapiters.forEach((botox) => {
            console.log("botox :: ", botox);
            let btys = botox.lessons.length;
            this.addChapiter2(btys);
          });
        } else {
          console.log("1111");
          this.addChapiter2(1);
        }
        (<FormGroup>this.courseForm).patchValue(this.courseData, {
          onlySelf: true,
        });
      },
      (err) => {
        console.log("get Course Error :", err);
      }
    );
  }

  /**
   * Créer FormGroup chapitres
   */
  initChapiter(): FormGroup {
    return this.formBuilder.group({
      title: ["", Validators.compose([Validators.required])],
      description: null,
      lessons: this.formBuilder.array([this.initLesson()]),
    });
  }

  /**
   * Créer FormGroup chapitres
   */
  initChapiter2(numberLesson): FormGroup {
    return this.formBuilder.group({
      title: ["", Validators.compose([Validators.required])],
      description: null,
      lessons: this.addLesson2(numberLesson),
    });
  }

  addLesson2(number) {
    let bts = new FormArray([]);
    for (let i = 0; i < number; i++) {
      bts.push(this.initLesson());
    }
    return bts;
  }
  /**
   * Créer FormGroup Cours
   */
  initLesson2(): FormGroup {
    return this.formBuilder.group({
      title: ["", Validators.compose([Validators.required])],
      description: [""],
      video: [""],
    });
  }

  addChapiter2(number) {
    const control = <FormArray>this.courseForm.controls["chapiters"];
    const botoxCtrl = this.initChapiter2(number);
    control.push(botoxCtrl);
  }

  deleteRowFormChapiter(iChapiter) {
    const control = (<FormArray>(
      this.courseForm.controls["chapiters"]
    )) as FormArray;
    if (iChapiter > 0 || control.length > 1) {
      control.removeAt(iChapiter);
    }
  }

  deleteRowFormLesson(iChapiter, iLesson) {
    const control = (<FormArray>this.courseForm.controls["chapiters"])
      .at(iChapiter)
      .get("lessons") as FormArray;
    if (iLesson > 0 || control.length > 1) {
      control.removeAt(iLesson);
    }
  }
  /**
   * Créer FormGroup Cours
   */
  initLesson(): FormGroup {
    return this.formBuilder.group({
      title: ["", Validators.compose([Validators.required])],
      description: [""],
      video: [""],
    });
  }

  initChapiterData(data): FormGroup {
    return this.formBuilder.group({
      title: ["", Validators.compose([Validators.required])],
      description: "",
      lessons: this.formBuilder.array([this.initLesson()]),
    });
  }

  buildServiceList(chapiters) {
    const arr = chapiters.map((service) => {
      return this.formBuilder.control(this.initChapiter());
    });
    return this.formBuilder.array(arr);
  }

  /**
   * Get Chapitres
   */
  get chapiters() {
    return this.courseForm.get("chapiters") as FormArray;
  }

  /**
   * Ahjouter Chapitre
   */
  addChapiter() {
    this.chapiters.push(this.initChapiter());
  }

  /**
   * Ajouter Lesson
   * @param i index Chapiter
   */
  addLesson(i) {
    const control = (<FormArray>this.courseForm.controls["chapiters"])
      .at(i)
      .get("lessons") as FormArray;
    control.push(this.initLesson());
  }

  /**
   * Edit course
   */
  updateCourse() {
    console.log("this.courseForm.value : ", this.courseForm.value);
    this.CoursesService.updateCourse(
      this.idCourse,
      this.courseForm.value
    ).subscribe(
      (data) => {
        if (data && data.body.success) {
          // Add File
          console.log("this.uploader :: ", this.uploader);
          this.uploader.uploadAll();
          this.notificationService.success("Félicitaions!", data.body.message);
        }
        console.log("updateCourse OK : ", data);
      },
      (error) => {
        this.notificationService.error(
          "Problème!",
          `Au niveau de la modification de la formation`,
          error,
          true
        );
      }
    );
  }
}
