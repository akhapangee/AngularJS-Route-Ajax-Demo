import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdboxComponet } from './components/adbox/adbox.component';
import { StudentComponent } from './components/student/student.component';
import { StudentService } from './services/StudentService';
import { StudentdetailComponent } from './components/studentdetail/studentdetail.component';
import { LoginComponent } from './components/login/login.component';

var routes:Routes=[
  {
    path:'', component:LoginComponent
  },
  {
    path:'student',component:StudentComponent
  },
  {
    path:'student/:id', component:StudentdetailComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdboxComponet,
    StudentComponent,
    StudentdetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
