import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyAdminComponent } from './BackOffice/body-admin/body-admin.component';
import { AllTemplatesAdminComponent } from './BackOffice/all-templates-admin/all-templates-admin.component';
import { AllTemplateUserComponent } from './FrontOffice/all-template-user/all-template-user.component';
import { BodyUserComponent } from './FrontOffice/body-user/body-user.component';
import {LoginComponent} from "./login/login.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AllTemplatesAdminComponent,canActivate:[AuthenticationGuard],
    children: [
      {
        path: 'home',
        component: BodyAdminComponent
      }
    ]
  },
  {
    path: 'user',
    component: AllTemplateUserComponent,canActivate:[AuthenticationGuard],
    children: [
      {
        path: 'home',
        component: BodyUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
