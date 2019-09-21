import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { UserService } from '../../../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'admin-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userData = null;
  updateUserForm: FormGroup;
  idUser: String;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
  private userService: UserService,
) {}

  ngOnInit() {
    this.idUser = this.route.snapshot.paramMap.get('id');
    this.getUser(this.idUser);
    console.log('idUser : ', this.idUser)

    this.updateUserForm = this.fb.group({
      fullName: null
    });

    if (this.userData) {

    }
  }

  getUser(id) {
    this.userService.getUser(id).subscribe(
      (result) => {
        console.log('get user : ', result);
        this.userData = result;
        this.updateUserForm['controls'].identity['controls'].lastname.setValue('ddd');
        this.updateUserForm['controls'].identity.setValue(this.userData.identity);
        this.updateUserForm['controls'].address.setValue(this.userData.address);
        this.updateUserForm['controls'].contact.setValue(this.userData.contact);
    }, (err) => {
      console.log('get User Error :', err);
    });
  }

  /**
   * Ajouter un utilisateur
   */
  newUser() {
    if (this.updateUserForm.valid) {
    this.userService.newUser(this.updateUserForm.value).subscribe(
      (result) => {
        console.log('new User OK : ', result);
    }, (err) => {
      console.log('new User Error :', err);
    });
    }
  }
  /**
   * Ajouter un utilisateur
   */
  updateUser() {
    if (this.updateUserForm.valid) {
    this.userService.updateUser(this.idUser, this.updateUserForm.value).subscribe(
      (result) => {
        console.log('update User OK : ', result);
    }, (err) => {
      console.log('update User Error :', err);
    });
    }
  }
  /**
   * After a form is initialized, we link it to our main form
   */
  formInitialized(name: string, form: FormGroup) {
    this.updateUserForm.setControl(name, form);
  }

}
