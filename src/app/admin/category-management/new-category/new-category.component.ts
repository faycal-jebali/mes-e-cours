import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { CategoryService } from '../../../services/category.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const UploadURL = 'http://localhost:4000/api/categories/upload';
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'photo'});
  
  configEditor = { toolbar: [ 'heading', '|', 'bold', 'italic' ] };
  public Editor = ClassicEditor;
  newForm: FormGroup;
  allCategories = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
  private userService: UserService,
  private categoryService: CategoryService,
) {}

  ngOnInit() {
    this.newForm = this.fb.group({
      title: null,
      description: null,
      image: null,
      parent: null
    });

    this.categoryService.getCategories().subscribe(
      (data) => {
        if (data) {
          this.allCategories = data;
        }
      },
      (error) => {
        console.log('Get Catégories Error :: ', error);
      });

          // Upload Files
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded:', item, status, response);
         // alert('File uploaded successfully');
    };
  }

  /**
   * Ajouter un utilisateur
   */
  newCategory() {
    if (this.newForm.valid) {
      console.log('this.newForm.value : ', this.newForm.value);
    this.categoryService.newCategory(this.newForm.value).subscribe(
      (result) => {
        this.uploader.uploadAll();
        console.log('new User OK : ', result);
    }, (err) => {
      console.log('new User Error :', err);
    });
    }
  }

  /**
   * After a form is initialized, we link it to our main form
   */
  formInitialized(name: string, form: FormGroup) {
    this.newForm.setControl(name, form);
  }

}
