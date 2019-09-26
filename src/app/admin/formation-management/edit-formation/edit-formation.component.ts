import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { FormationsService } from '../../../services/formations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
const UploadURL = 'http://localhost:4000/api/upload';

@Component({
  selector: 'admin-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.scss']
})
export class EditFormationComponent implements OnInit {
  title = 'Upload a File';
  idFormation: String;
  formationData = null;
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

    this.idFormation = this.route.snapshot.paramMap.get('id');
    this.getFormation(this.idFormation);
    console.log('idFomation : ', this.idFormation)
    
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

  getFormation(id) {
    this.formationsService.getFormation(id).subscribe(
      (result) => {
        console.log('get Formation : ', result);
        this.formationData = result;
        this.formationForm['controls'].title.setValue(this.formationData.title);
        this.formationForm['controls'].statut.setValue(this.formationData.statut);
        this.formationForm['controls'].description.setValue(this.formationData.description);
        this.formationForm['controls'].price.setValue(this.formationData.price);
        this.formationForm['controls'].promotionPrice.setValue(this.formationData.promotionPrice);
        this.formationForm['controls'].categoriesId.setValue(this.formationData.categoriesId);
        this.formationForm['controls'].chapiters.setValue(this.formationData.chapiters);
    }, (err) => {
      console.log('get Formation Error :', err);
    });
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


  /**
   * Modifier une formation
   */
  updateFormation() {
    console.log('this.formationForm.value : ', this.formationForm.value);
    this.formationsService.updateFormation(this.idFormation, this.formationForm.value).subscribe(
      (result) => {
        console.log('updateFormation OK : ', result);
        // Add File
        this.uploader.uploadAll();
      // this.router.navigate(['/product-details/'+result._id]);
    }, (err) => {
      console.log('UpdateFormation Error :', err);
    });
  }

}