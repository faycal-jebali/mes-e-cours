import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../../../shared/services/user.service";

import { Router } from "@angular/router";

@Component({
  selector: "app-new-user",
  templateUrl: "./new-user.component.html",
  styleUrls: ["./new-user.component.scss"],
})
export class NewUserComponent implements OnInit {
  newUserForm: FormGroup;
  roles = new Map();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.roles.set("trainee", "Souscripteur");
    this.roles.set("trainer", "Formateur");
    this.roles.set("admin", "Administrateur");
  }

  ngOnInit() {
    this.newUserForm = this.fb.group({
      role: ["", Validators.required],
    });
  }

  /**
   * Ajouter un utilisateur
   */
  newUser() {
    if (this.newUserForm.valid) {
      console.log("this.newUserForm.value : ", this.newUserForm.value);
      this.userService.newUser(this.newUserForm.value).subscribe(
        (result) => {
          console.log("new User OK : ", result);
        },
        (err) => {
          console.log("new User Error :", err);
        }
      );
    }
  }

  /**
   * After a form is initialized, we link it to our main form
   */
  formInitialized(name: string, form: FormGroup) {
    this.newUserForm.setControl(name, form);
  }
}
