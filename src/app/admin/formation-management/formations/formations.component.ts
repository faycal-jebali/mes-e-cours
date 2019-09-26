import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../business-objects/user';
import { UserService } from '../../../services/user.service';
import { FormationsService } from '../../../services/formations.service';

@Component({
  selector: 'admin-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  allFormation = [];
  displayedColumns: string[] = ['position', 'name', 'role', 'actions'];

  constructor(
    private userService: UserService,
    private formationsService: FormationsService,
  ) { }

  ngOnInit() {
    // this.allUser$ = this.userService.getAllUsers();
    this.formationsService.getFormations().subscribe((data) => {
      if (data) {
        this.allFormation = data;
      }
      console.log('DATA :: ', data);
    })
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe((data) => {
      if (data) {
        console.log('Delete user :: ', data);
      }
      console.log('DATA :: ', data);
    })
  }
}
