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
  selector: 'admin-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.scss']
})
export class EditFormationComponent implements OnInit {
  configEditor = { toolbar: [ 'heading', '|', 'bold', 'italic' ] };
  public Editor = ClassicEditor;
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
      chapiters: this.formBuilder.array([])
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
        if( this.formationData && this.formationData.chapiters.length > 0) {
          this.formationData.chapiters.forEach((botox) => {
            console.log('botox :: ', botox);
            let btys = botox.lessons.length;
            this.addChapiter2(btys);
          });
        } else {
          console.log('1111')
          this.addChapiter2(1);
        }
        (<FormGroup>this.formationForm).patchValue(this.formationData, { onlySelf: true });
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
   * Créer FormGroup chapitres
   */
  initChapiter2(numberLesson): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: null,
      lessons: this.addLesson2(numberLesson)
    });
  }

  addLesson2(number) {
    let bts = new FormArray([]);
    for(let i = 0; i < number; i++) {
      bts.push(this.initLesson())
    }
    return bts;
  }
    /**
   * Créer FormGroup Cours
   */
  initLesson2(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])],
      video: ['', [Validators.required]],
    });
  }

  addChapiter2(number) {
    const control = <FormArray>this.formationForm.controls['chapiters'];
    const botoxCtrl = this.initChapiter2(number);
    control.push(botoxCtrl);
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

  initChapiterData(data): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      description: '',
      lessons: this.formBuilder.array([
        this.initLesson()
      ])  
    });
  }


  buildServiceList(chapiters) {
    const arr = chapiters.map(service => {
      return this.formBuilder.control(this.initChapiter());
    });
    return this.formBuilder.array(arr);
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
  // addFormation() {
  //   console.log('this.formationForm.value : ', this.formationForm.value);
  //   this.formationsService.addFormation(this.formationForm.value).subscribe(
  //     (result) => {
  //       console.log('AddPrd OK : ', result);
  //       // Add File
  //       this.uploader.uploadAll();
  //     // this.router.navigate(['/product-details/'+result._id]);
  //   }, (err) => {
  //     console.log('AddPrd Error :', err);
  //   });
  // }


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