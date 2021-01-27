import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { CategoryService } from "../../../services/category.service";
import { Router, ActivatedRoute } from "@angular/router";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { NotificationService } from "../../../shared/components/notification/notification.service";
import { FileUploader } from "ng2-file-upload";

const UploadURL = "http://localhost:3000/api/categories/upload";

@Component({
  selector: "admin-edit-category",
  templateUrl: "./edit-category.component.html",
  styleUrls: ["./edit-category.component.scss"],
})
export class EditCategoryComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: UploadURL,
    itemAlias: "photo",
  });

  configEditor = { toolbar: ["heading", "|", "bold", "italic"] };
  public Editor = ClassicEditor;
  categoryData = null;
  updateForm: FormGroup;
  idCategory: String;
  allCategories = [];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.idCategory = this.route.snapshot.paramMap.get("id");
    this.getCategory(this.idCategory);
    console.log("idCategory : ", this.idCategory);

    this.updateForm = this.fb.group({
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
    };
  }

  getCategory(id) {
    this.categoryService.getCategory(id).subscribe(
      (result) => {
        console.log("get category : ", result);
        this.categoryData = result;
        this.updateForm["controls"].title.setValue(this.categoryData.title);
        this.updateForm["controls"].description.setValue(
          this.categoryData.description
        );
        this.updateForm["controls"].parent.setValue(this.categoryData.parent);
      },
      (err) => {
        console.log("get Category Error :", err);
      }
    );
  }

  /**
   * Ajouter une Catégorie
   */
  updateCategory() {
    if (this.updateForm.valid) {
      this.categoryService
        .updateCategory(this.idCategory, this.updateForm.value)
        .subscribe(
          (data) => {
            if (data.body.success) {
              this.uploader.uploadAll();
              this.notificationService.success(
                "Félicitaions!",
                data.body.message
              );
            } else {
              this.notificationService.error(
                "Problème!",
                `Au niveau de la modification de la catégorie ${this.idCategory}`,
                {},
                true
              );
            }
          },
          (error) => {
            this.notificationService.error(
              "Problème!",
              `Au niveau de la modification catégorie ${this.idCategory}`,
              error,
              true
            );
          }
        );
    }
  }
  /**
   * After a form is initialized, we link it to our main form
   */
  formInitialized(name: string, form: FormGroup) {
    this.updateForm.setControl(name, form);
  }
}
