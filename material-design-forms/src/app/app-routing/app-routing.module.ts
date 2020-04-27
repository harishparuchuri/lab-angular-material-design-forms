import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from '../signin/signin.component';
import { RegistrationComponent } from '../registration/registration.component';

const routes: Routes = [ {path:'signin',component:SigninComponent},
{path:'registration',component:RegistrationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }