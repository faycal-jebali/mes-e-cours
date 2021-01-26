import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  newUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public auth: AuthService,
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
