import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/user.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-new-formation',
  templateUrl: './new-formation.component.html',
  styleUrls: ['./new-formation.component.scss']
})
export class NewFormationComponent implements OnInit {
  newUserForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  private userService: UserService,
) {}

  ngOnInit() {
    this.newUserForm = this.fb.group({
      fullName: null
    })
  }

  /**
   * Ajouter un utilisateur
   */
  newUser() {
    if (this.newUserForm.valid) {
      console.log('this.newUserForm.value : ', this.newUserForm.value);
    this.userService.newUser(this.newUserForm.value).subscribe(
      (result) => {
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
    this.newUserForm.setControl(name, form);
  }

}
