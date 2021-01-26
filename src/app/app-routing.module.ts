import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { CategoriesComponent } from './admin/category-management/categories/categories.component';
import { EditCategoryComponent } from './admin/category-management/edit-category/edit-category.component';
import { NewCategoryComponent } from './admin/category-management/new-category/new-category.component';
import { EditFormationComponent } from './admin/formation-management/edit-formation/edit-formation.component';
import { FormationsComponent } from './admin/formation-management/formations/formations.component';
import { NewFormationComponent } from './admin/formation-management/new-formation/new-formation.component';
import { EditUserComponent } from './admin/user-management/edit-user/edit-user.component';
import { MyAccountComponent } from './admin/user-management/my-account/my-account.component';
import { NewUserComponent } from './admin/user-management/new-user/new-user.component';
import { UsersComponent } from './admin/user-management/users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DetailsCourseComponent } from './pages/details-course/details-course.component';
import { DetailsComponent } from './pages/details/details.component';
import { FormationsPageComponent } from './pages/formations-page/formations-page.component';
import { MonCompteComponent } from './pages/utilisateur/mon-compte/mon-compte.component';

// Training
//Category

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'login', component: LoginComponent},
  { 
    path: 'formations',
    component: FormationsPageComponent
  },
  { 
    path: 'formations/:id',
    component: DetailsComponent,
  },
  { 
    path: 'course/:id',
    component: DetailsCourseComponent,
  },
  {
    path: 'mon-compte',
    component: MonCompteComponent,
    data: { title: 'Mon Compte' }, canActivate: [AuthGuard]
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
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
