import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

import { UserService } from "../../../shared/services/user.service";

@Component({
  selector: "admin-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.scss"],
})
export class EditUserComponent implements OnInit {
  userData = null;
  updateUserForm: FormGroup;
  idUser: String;
  roles = new Map();

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.roles.set("trainee", "Souscripteur");
    this.roles.set("trainer", "Formateur");
    this.roles.set("admin", "Administrateur");
  }

  ngOnInit() {
    this.idUser = this.route.snapshot.paramMap.get("id");
    this.getUser(this.idUser);
    console.log("idUser : ", this.idUser);

    this.updateUserForm = this.fb.group({
      role: ["", Validators.required],
    });
    if (this.updateUserForm["controls"].contact.get("password")) {
      this.updateUserForm["controls"].contact
        .get("password")
        .setValidators(null);
      console.log("updateFOrm :: ", this.updateUserForm);
    }
    // this.updateUserForm['controls'].identity['controls'].password.setCo
  }

  getUser(id) {
    this.userService.getUser(id).subscribe(
      (result) => {
        console.log("get user : ", result);
        this.userData = result;
        this.updateUserForm["controls"].role.setValue(this.userData.role);
        this.updateUserForm["controls"].identity.setValue(
          this.userData.identity
        );
        this.updateUserForm["controls"].address.setValue(this.userData.address);
        this.updateUserForm["controls"].contact.setValue(this.userData.contact);
      },
      (err) => {
        console.log("get User Error :", err);
      }
    );
  }

  /**
   * Ajouter un utilisateur
   */
  newUser() {
    if (this.updateUserForm.valid) {
      this.userService.newUser(this.updateUserForm.value).subscribe(
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
   * Ajouter un utilisateur
   */
  updateUser() {
    if (this.updateUserForm.valid) {
      this.userService
        .updateUser(this.idUser, this.updateUserForm.value)
        .subscribe(
          (result) => {
            console.log("update User OK : ", result);
          },
          (err) => {
            console.log("update User Error :", err);
          }
        );
    }
  }
  /**
   * After a form is initialized, we link it to our main form
   */
  formInitialized(name: string, form: FormGroup) {
    this.updateUserForm.setControl(name, form);
  }
}
