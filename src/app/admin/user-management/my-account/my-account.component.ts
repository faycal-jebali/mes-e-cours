import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"],
})
export class MyAccountComponent implements OnInit {
  newUserForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.newUserForm = this.fb.group({
      fullName: null,
    });
  }

  /**
   * Ajouter un utilisateur
   */
  newUser() {
    if (this.newUserForm.valid) {
      console.log("this.formationForm.value : ", this.newUserForm.value);
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
