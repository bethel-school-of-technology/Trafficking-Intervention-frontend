import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LoginComponent } from './components/login/login.component';
import { PrayerComponent } from './components/prayer/prayer.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { LogoutComponent } from './components/logout/logout.component';

import {HttpClientModule} from '@angular/common/http';
import { GetRequestComponent } from './components/prayer/fetchPrayer/fetch.component';
import { FetchTestimoniesComponent } from './components/testimonies/fetch-testimonies/fetch-testimonies.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationsComponent,
    LoginComponent,
    PrayerComponent,
    RegistrationComponent,
    TestimoniesComponent,
    LogoutComponent,
    GetRequestComponent,
    FetchTestimoniesComponent 
    // added GetRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
