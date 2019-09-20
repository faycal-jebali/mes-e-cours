import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'adresse-form',
  templateUrl: './adresse-form.component.html',
  styleUrls: ['./adresse-form.component.scss']
})
export class AdresseFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>()
  adresseForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.adresseForm = this.fb.group({
      country: null,
      city: null,
      address: null,
      zip: null
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.adresseForm);
  }
}