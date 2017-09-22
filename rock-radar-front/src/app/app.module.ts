import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landingpage/landingpage.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SigninComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    {provide: AuthService, useClass: AuthService},
    {provide: AuthGuard, useClass: AuthGuard},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }