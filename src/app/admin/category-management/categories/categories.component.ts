import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../business-objects/user';
import { UserService } from '../../../services/user.service';
import { CategoryService } from '../../../services/category.service';

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
    this.categoryService.deleteCategory(id).subscribe((data) => {
      if (data) {
        console.log('Delete category :: ', data);
      }
      console.log('DATA :: ', data);
    })
  }
}
