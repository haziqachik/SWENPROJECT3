import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewComponent } from './review/review.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { routing } from './app.routing';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AuthService } from './auth.service'; 
import { NgbdModalBasic } from './modal-basic';

@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    LoginComponent,
    SignupComponent,
    RegisterComponent,
    UserComponent,
    LogoutComponent,
    AdminComponent,
    NgbdModalBasic
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    routing, 
    HttpClientModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    NgbModule 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
   
 }
