import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  newUserForm: FormGroup;

  constructor(
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
