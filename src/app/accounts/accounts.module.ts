import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterFormComponent } from './create/register-form/register-form.component';
import { CreateAccountComponent } from './create/create-account.component';
import { InfoFormComponent } from './create/info-form/info-form.component';
import { AccountsComponent } from './accounts.component';


@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent,
    LoginComponent,
    CreateAccountComponent,
    InfoFormComponent,
    AccountsComponent,
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccountsModule { }
