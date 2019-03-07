import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileAddComponent } from './profile-add/profile-add.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

const appRoutes: Routes = [
  {
    path: 'users',
    component: ProfileComponent,
    data: { title: 'Users List'} 
  },
  {
    path: 'user-add',
    component: ProfileAddComponent,
    data: { title: 'user add' }
  },
  {
    path: 'user-detail/:name',
    component: ProfileDetailComponent,
    data: { title: 'user detail' }
  },
  {
    path: 'user-edit/:name',
    component: ProfileEditComponent,
    data: { title: 'user edit' }
  },
  { path: 'users',
    redirectTo: 'http://localhost:4200/users',
    pathMatch: 'full'
  }

];
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileAddComponent,
    ProfileDetailComponent,
    ProfileEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
