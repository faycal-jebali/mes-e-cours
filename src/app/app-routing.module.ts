import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DetailsComponent } from './pages/details/details.component';
import { FormationsPageComponent } from './pages/formations-page/formations-page.component';
import { MonCompteComponent } from './pages/utilisateur/mon-compte/mon-compte.component';
import { AdminComponent } from './admin/admin.component';
import { NewUserComponent } from './admin/user-management/new-user/new-user.component';
import { EditUserComponent } from './admin/user-management/edit-user/edit-user.component';
import { UsersComponent } from './admin/user-management/users/users.component';

// Training
import { FormationsComponent } from './admin/formation-management/formations/formations.component';
import { NewFormationComponent } from './admin/formation-management/new-formation/new-formation.component';
import { EditFormationComponent } from './admin/formation-management/edit-formation/edit-formation.component';

//Category
import { CategoriesComponent } from './admin/category-management/categories/categories.component';
import { NewCategoryComponent } from './admin/category-management/new-category/new-category.component';
import { EditCategoryComponent } from './admin/category-management/edit-category/edit-category.component';
import { MyAccountComponent } from './admin/user-management/my-account/my-account.component';


const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'login', component: LoginComponent},
  { path: 'formations', component: FormationsPageComponent},
  {
    path: 'mon-compte',
    component: MonCompteComponent,
    data: { title: 'Mon Compte' }, canActivate: [AuthGuard]
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    data: { title: 'Product Add' }
  },
  {
    path: 'administrator',
    component: AdminComponent,
    children: [
      {
        path: 'user',
        children : [
          {
            path: 'current',
            component: MyAccountComponent,
          },
          {
            path: 'all',
            component: UsersComponent,
          },
          {
            path: 'new',
            component: NewUserComponent,
          },
          {
            path: 'edit/:id',
            component: EditUserComponent,
          }
        ]
      },
      {
        path: 'formation',
        children : [
          {
            path: 'all',
            component: FormationsComponent,
          },
          {
            path: 'new',
            component: NewFormationComponent,
          },
          {
            path: 'edit/:id',
            component: EditFormationComponent,
          }
        ]
      },
      {
        path: 'category',
        children : [
          {
            path: 'all',
            component: CategoriesComponent,
          },
          {
            path: 'new',
            component: NewCategoryComponent,
          },
          {
            path: 'edit/:id',
            component: EditCategoryComponent,
          }
        ]
      }
    ]
  },
  // {
  //   path: 'administrator/user/all',
  //   component: UsersComponent,
  // },
  // otherwise redirect to home
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
