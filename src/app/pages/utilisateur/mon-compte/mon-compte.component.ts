import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-mon-compte',
  templateUrl: './mon-compte.component.html',
  styleUrls: ['./mon-compte.component.scss']
})
export class MonCompteComponent implements OnInit {
  profilForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profilForm = this.fb.group({
      fullName: null
    })
  }

  /**
   * After a form is initialized, we link it to our main form
   */
  formInitialized(name: string, form: FormGroup) {
    this.profilForm.setControl(name, form);
  }

}
