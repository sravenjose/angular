import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToasterService } from './toaster.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CoursesComponent } from './courses/courses.component'
import { SetComponent } from './set/set.component';
import { RegComponent } from './reg/reg.component';
import { EditComponent } from './edit/edit.component';
import { LogoutComponent } from './logout/logout.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';

const appRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent, 
    data: { title: 'auth'}
  },

  {
    path: 'reg',
    component: RegComponent, 
    data: { title: 'reg'}
  },

  {
    path: 'courses',
    component: CoursesComponent ,
    data: { title: 'List'}
  },
  {
    path: 'landing',
    component: LandingComponent ,
    data: { title: 'landing'}
  },
  {
    path: 'logout',
    component: LogoutComponent ,
    data: { title: 'logout'}
  },


  {
    path: 'edit/:course',
    component: EditComponent, 
    data: { title: 'edit'}
  },

  {
    path: 'set',
    component: SetComponent,
    data: { title: 'profile update'} 
  },
 
  { path: '**',
    redirectTo: 'http://localhost:4200/auth',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [   
    AppComponent,
    NavComponent,
    AuthComponent,
    CoursesComponent,
    SetComponent,
    RegComponent,
    EditComponent,
    LogoutComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  

  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
