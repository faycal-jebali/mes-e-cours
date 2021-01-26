import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../business-objects/user';
import { UserService } from '../../../services/user.service';
import { FormationsService } from '../../../services/formations.service';
import { NotificationService } from '../../../shared/components/notification/notification.service';

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
    private notificationService: NotificationService,
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

  deleteFormation(id) {
    this.formationsService.deleteFormation(id).subscribe((data) => {
      if (data && data.body.success) {
        this.allFormation = this.allFormation.filter((item) => item._id !== id);
        this.notificationService.success('Félicitaions!', data.body.message);
        console.log('Delete Formation :: ', data);
      }
      console.log('DATA :: ', data);
    })
  }
}
