import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>()
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      civilite: null,
      nom: null,
      prenom: null,
      naissance: null,
      situationFamiliale: null,
    });

    // Emit the form group to the father to do whatever it wishes
    this.formReady.emit(this.contactForm);
  }
}
