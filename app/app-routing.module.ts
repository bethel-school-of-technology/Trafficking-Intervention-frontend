import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { LoginComponent } from './login/login.component';
import { PrayerComponent } from './prayer/prayer.component';
import { RegistrationComponent } from './registration/registration.component';
import { TestimoniesComponent } from './testimonies/testimonies.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'prayer', component: PrayerComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'testimonies', component: TestimoniesComponent },
  { path: 'logout', component: LogoutComponent }
  
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
