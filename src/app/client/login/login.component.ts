import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { first } from "rxjs/operators";

import { AuthService } from "../../shared/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  public username: string;
  public password: string;
  public error: string;
  container: any;
  @ViewChild("containerUserForm") containerUserForm: ElementRef;
  @ViewChild("signInUpModal") signInUpModal;

  constructor(
    private auth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    //     const signUpButton = document.getElementById('signUp');
    // const signInButton = document.getElementById('signIn');
    // this.container = document.getElementById('container-user-form');
    // signUpButton.addEventListener('click', () => {
    //     container.classList.add('right-panel-active');
    // });
    // signInButton.addEventListener('click', () => {
    //     container.classList.remove('right-panel-active');
    // });
  }

  ngOnInit() {
    this.formLogin = this.fb.group({
      username: [""],
      password: [""],
    });
  }
  signUpOpen() {
    this.containerUserForm.nativeElement.classList.add("right-panel-active");
  }

  signInOpen() {
    this.containerUserForm.nativeElement.classList.remove("right-panel-active");
  }

  public submit() {
    this.auth
      .login(
        this.formLogin.get("username").value,
        this.formLogin.get("password").value
      )
      .pipe(first())
      .subscribe(
        (result) => {
          console.log("Connected");
          this.router.navigate(["/"], {
            queryParams: { refresh: new Date().getTime() },
          });
          this.signInUpModal.hide();
          // this.router.navigate(['/', {skipLocationChange: true}]);
          // this.router.navigated = false;
          // this.router.navigateByUrl('/', {skipLocationChange: true});
        },
        (err) => (this.error = "Could not authenticate")
      );
  }
}
