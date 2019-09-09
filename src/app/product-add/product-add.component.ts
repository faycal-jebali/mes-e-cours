import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const UploadURL = 'http://localhost:4000/api/upload';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  title = 'Upload a File';

  public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'photo'});

  @Input() productData = { prod_name:'Test Title', prod_desc: 'Test Descrip', prod_price: 160 };
  formationForm: FormGroup;
  selectedFile: File

  constructor(
    private formBuilder: FormBuilder,
    public rest: RestService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.formationForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      promotionPrice: ['', Validators.required],
      categoriesId: ['', Validators.required], 
      image: ['', Validators.required], 
      chapiters: this.formBuilder.array([
        this.createChapiter()
      ])     
    });


    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
  }

  
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    console.log('selectedFile : ', this.selectedFile);
  }

  createChapiter(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
    });
  }
  get chapiters() {
    return this.formationForm.get('chapiters') as FormArray;
  }

  addChapiter() {
    this.chapiters.push(this.createChapiter());
  }

  addProduct() {
    console.log('this.formationForm.value : ', this.formationForm.value);
    this.rest.addProduct(this.formationForm.value).subscribe(
      (result) => {
        console.log('AddPrd OK : ', result);
        // Add File
        this.uploader.uploadAll()
      // this.router.navigate(['/product-details/'+result._id]);
    }, (err) => {
      console.log('AddPrd Error :', err);
    });
  }

}