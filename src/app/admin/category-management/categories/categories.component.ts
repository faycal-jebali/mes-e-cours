import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../business-objects/user';
import { UserService } from '../../../services/user.service';
import { CategoryService } from '../../../services/category.service';
import { NotificationService } from '../../../shared/components/notification/notification.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'admin-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  allCategories = [];
  displayedColumns: string[] = ['position', 'name', 'role', 'actions'];

  constructor(
    private userService: UserService,
    private categoryService: CategoryService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      if (data) {
        this.allCategories = data;
      }
      console.log('DATA :: ', data);
    });
  }

  deleteCategory(id) {
    this.categoryService.deleteCategory(id).subscribe(
      (data) => {
      if (data && data.body.success) {
          this.allCategories = this.allCategories.filter((item) => item._id !== id);
          this.notificationService.success('Félicitaions!', data.body.message);
      }
    }),
    (error) => {
      this.notificationService.error('Problème!', `Au niveau de la suppression de la catégorie (${id})`, error, true);
    }
  }
}
