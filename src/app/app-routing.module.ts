import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LoginComponent } from './components/login/login.component';
import { PrayerComponent } from './components/prayer/prayer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
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
