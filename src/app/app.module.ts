import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataComponent } from './data/data.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeModule } from './home/home.module';
import { AccountsModule } from './accounts/accounts.module';


import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    AccountsModule,
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
