import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav') sidenav: ElementRef;
  // @ViewChild('sidenav', {static: true}) public sidenav: any;

  clicked: boolean;

  constructor(
    public auth: AuthService,
    public router: Router,
    public dialog: MatDialog,
  ) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
  }

  openDialog() {
    // this.dialog.open(DialogDataExampleDialog, {
    //   data: {
    //     animal: 'panda'
    //   }
    // });
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
