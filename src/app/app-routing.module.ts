import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProductComponent } from './product/product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { DetailsComponent } from './pages/details/details.component';
import { FormationsComponent } from './pages/formations/formations.component';
import { MonCompteComponent } from './pages/utilisateur/mon-compte/mon-compte.component';
import { NewUserComponent } from './pages/utilisateur/user-management/new-user/new-user.component';
import { EditUserComponent } from './pages/utilisateur/user-management/edit-user/edit-user.component';
import { UsersComponent } from './pages/utilisateur/user-management/users/users.component';


const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'todos', component: TodoListComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'formations', component: FormationsComponent},
  {
    path: 'mon-compte',
    component: MonCompteComponent,
    data: { title: 'Mon Compte' }
  },
  {
    path: 'products',
    component: ProductComponent,
    data: { title: 'Product List' }
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Details' }
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    data: { title: 'Product Add' }
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    data: { title: 'Product Add' }
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent,
    data: { title: 'Product Edit' }
  },
  {
    path: 'administrator',
    children: [
      {
        path: 'user',
        children : [
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
      }
    ]
  },
  // {
  //   path: 'administrator/user/all',
  //   component: UsersComponent,
  // },
  // otherwise redirect to home
  { path: '**', redirectTo: 'todos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
