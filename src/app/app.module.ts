import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/Material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDashboardComponent } from './shared/Componants/post-dashboard/post-dashboard.component';
import { PostCardComponent } from './shared/Componants/post-card/post-card.component';
import { PostFormComponent } from './shared/Componants/post-form/post-form.component';
import { PostComponent } from './shared/Componants/post/post.component';
import { NavbarComponent } from './shared/Componants/navbar/navbar.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { GetConfirmComponent } from './shared/Componants/get-confirm/get-confirm.component';
import { EmpDashboardComponent } from './shared/Componants/EmplyoeeCurd/emp-dashboard/emp-dashboard.component';
import { EmpFormComponent } from './shared/Componants/EmplyoeeCurd/emp-form/emp-form.component';
import { EmpListComponent } from './shared/Componants/EmplyoeeCurd/emp-list/emp-list.component';
import { EmplyoeeComponent } from './shared/Componants/EmplyoeeCurd/emplyoee/emplyoee.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDashboardComponent,
    PostCardComponent,
    PostFormComponent,
    PostComponent,
    NavbarComponent,
    GetConfirmComponent,
    EmpDashboardComponent,
    EmpFormComponent,
    EmpListComponent,
    EmplyoeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
