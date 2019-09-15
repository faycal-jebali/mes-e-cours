import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'identite-form',
  templateUrl: './identite-form.component.html',
  styleUrls: ['./identite-form.component.scss']
})
export class IdentiteFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>()
  identiteForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.identiteForm = this.fb.group({
      civilite: null,
      nom: null,
      prenom: null,
      naissance: null,
      situationFamiliale: null,
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.identiteForm);
  }
}
