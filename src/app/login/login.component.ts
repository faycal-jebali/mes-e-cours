import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public username: string;
  public password: string;
  public error: string;
  container: any;
  @ViewChild('containerUserForm') containerUserForm: ElementRef;
  @ViewChild('signInUpModal') signInUpModal;

  constructor(private auth: AuthService, private router: Router) {

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

   signUpOpen() {
     this.containerUserForm.nativeElement.classList.add('right-panel-active');
    }
    
    signInOpen() {
     this.containerUserForm.nativeElement.classList.remove('right-panel-active');    
   }

  public submit() {
    this.auth.login(this.username, this.password)
      .pipe(first())
      .subscribe(
        (result) => {
          console.log('Connected');
          this.router.navigate(['/'], {
            queryParams: {refresh: new Date().getTime()}
         });
         this.signInUpModal.hide();
          // this.router.navigate(['/', {skipLocationChange: true}]);
          // this.router.navigated = false;
          // this.router.navigateByUrl('/', {skipLocationChange: true});
        },
        err => this.error = 'Could not authenticate'
      );
  }
}
