import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { OpeninngComponent } from './pages/openinng/openinng.component';
import { CreatePlanComponent } from './pages/createplan/createplan.component';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { StarRatingComponent } from './pages/star-rating/star-rating.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewmealComponent } from './pages/newmeal/newmeal.component';
import { SettingsComponent } from './pages/settings/settings.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    OpeninngComponent,
    CreatePlanComponent,
    ShoppingcartComponent,
    StarRatingComponent,
    ProfileComponent,
    NewmealComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
