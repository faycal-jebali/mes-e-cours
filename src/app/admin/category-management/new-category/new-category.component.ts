import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { NotificationService } from "../../../shared/components/notification/notification.service";
import { CategoryService } from "../../../shared/services/category.service";

@Component({
  selector: "app-new-category",
  templateUrl: "./new-category.component.html",
  styleUrls: ["./new-category.component.scss"],
})
export class NewCategoryComponent implements OnInit {
  configEditor = { toolbar: ["heading", "|", "bold", "italic"] };
  public Editor = ClassicEditor;
  newForm: FormGroup;
  allCategories = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.newForm = this.fb.group({
      title: null,
      description: null,
      image: null,
      parent: null,
    });

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

  /**
   * Ajouter un utilisateur
   */
  newCategory() {
    if (this.newForm.valid) {
      console.log("this.newForm.value : ", this.newForm.value);
      this.categoryService.newCategory(this.newForm.value).subscribe(
        (data) => {
          console.log("data body: ", data);
          if (data.success) {
            // this.uploader.uploadAll();
            this.notificationService.success("Félicitaions!", data.message);
          } else {
            this.notificationService.error(
              "Problème!",
              `Au niveau de l'ajout d'une catégorie`,
              {},
              true
            );
          }
          console.log("new cat OK : ", data);
        },
        (error) => {
          this.notificationService.error(
            "Problème!",
            `Au niveau de l'ajout d'une catégorie`,
            error,
            true
          );
        }
      );
    }
  }

  public onFileChange(event) {
    const reader = new FileReader();

    console.log("event :: ", event.target.files);
    if (event.target.files && event.target.files.length) {
      const fileName = event.target.files[0].name;
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.newForm.patchValue({
          image: { fileName: fileName, content: reader.result },
        });
      };
    }
  }

  /**
   * After a form is initialized, we link it to our main form
   */
  formInitialized(name: string, form: FormGroup) {
    this.newForm.setControl(name, form);
  }
}
