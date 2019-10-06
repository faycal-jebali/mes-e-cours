import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { FormationsService } from '../../../services/formations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const UploadURL = 'http://localhost:4000/api/upload';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-new-formation',
  templateUrl: './new-formation.component.html',
  styleUrls: ['./new-formation.component.scss']
})
export class NewFormationComponent implements OnInit {
  configEditor = { toolbar: [ 'heading', '|', 'bold', 'italic' ] };
  public Editor = ClassicEditor;
  
  title = 'Upload a File';

  public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'photo'});

  @Input() productData = { prod_name:'Test Title', prod_desc: 'Test Descrip', prod_price: 160 };
  formationForm: FormGroup;
  selectedFile: File

  constructor(
    private formBuilder: FormBuilder,
    public restService: RestService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private formationsService: FormationsService
  ) { }

  /**
   * NgOnInit
   */
  ngOnInit() {
    this.formationForm = this.formBuilder.group({
      statut: [false, Validators.required],
      title: ['', Validators.required],
      description: null,
      price: ['', Validators.required],
      promotionPrice: null,
      categoriesId: ['', Validators.required], 
      image: ['', Validators.required], 
      chapiters: this.formBuilder.array([
        this.initChapiter()
      ])     
    });


    // Upload Files
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded:', item, status, response);
         // alert('File uploaded successfully');
     };
  }

  /**
   * Créer FormGroup chapitres
   */
  initChapiter(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: null,
      lessons: this.formBuilder.array([
        this.initLesson()
      ])  
    });
  }

  /**
   * Créer FormGroup Cours
   */
  initLesson(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      video: ['', [Validators.required]],
    });
  }

  /**
   * Get Chapitres
   */
  get chapiters() {
    return this.formationForm.get('chapiters') as FormArray;
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
    const control = (<FormArray>this.formationForm.controls['chapiters']).at(i).get('lessons') as FormArray;
    control.push(this.initLesson());
  }


  /**
   * Ajouter une formation
   */
  addFormation() {
    console.log('this.formationForm.value : ', this.formationForm.value);
    this.formationsService.addFormation(this.formationForm.value).subscribe(
      (result) => {
        console.log('AddPrd OK : ', result);
        // Add File
        this.uploader.uploadAll();
      // this.router.navigate(['/product-details/'+result._id]);
    }, (err) => {
      console.log('AddPrd Error :', err);
    });
  }

}