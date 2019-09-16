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
  newUserForm: FormGroup;
  idUser: String;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
  private userService: UserService,
) {}

  ngOnInit() {
    this.idUser = this.route.snapshot.paramMap.get('id');
    console.log('idUser : ', this.idUser)

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
