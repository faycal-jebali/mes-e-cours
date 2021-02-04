import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FileUploader } from "ng2-file-upload";

import { NotificationService } from "../../../shared/components/notification/notification.service";
import { CategoryService } from "../../../shared/services/category.service";
import { CoursesService } from "../../../shared/services/courses.service";
import { UserService } from "../../../shared/services/user.service";

const UploadURL = "http://localhost:5100/api/courses/upload";
@Component({
  selector: "app-new-course",
  templateUrl: "./new-course.component.html",
  styleUrls: ["./new-course.component.scss"],
})
export class NewCourseComponent implements OnInit {
  configEditor = { toolbar: ["heading", "|", "bold", "italic"] };
  public Editor = ClassicEditor;

  title = "Upload a File";

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
    private CoursesService: CoursesService,
    private notificationService: NotificationService,
    private userService: UserService,
    private categoryService: CategoryService
  ) {}

  /**
   * NgOnInit
   */
  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      trainer: [null, Validators.required],
      statut: [false, Validators.required],
      title: ["", Validators.required],
      description: null,
      price: ["", Validators.required],
      promotionPrice: null,
      categoriesId: ["", Validators.required],
      image: [""],
      chapiters: this.formBuilder.array([this.initChapiter()]),
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
      console.log("FileUpload:uploaded:", item, status, response);
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
   * Créer FormGroup Cours
   */
  initLesson(): FormGroup {
    return this.formBuilder.group({
      title: ["", Validators.compose([Validators.required])],
      description: [""],
      video: [""],
    });
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
   * Add course
   */
  addCourse() {
    console.log("this.courseForm.value : ", this.courseForm.value);
    this.CoursesService.addCourse(this.courseForm.value).subscribe(
      (data) => {
        if (data && data.body.success) {
          // Add File
          this.uploader.uploadAll();
          this.notificationService.success("Félicitaions!", data.body.message);
        }
        console.log("AddPrd OK : ", data);
      },
      (error) => {
        this.notificationService.error(
          "Problème!",
          `Au niveau de l'ajout d'une formation`,
          error,
          true
        );
      }
    );
  }
}
