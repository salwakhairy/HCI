import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { OpeninngComponent } from './pages/openinng/openinng.component'; // Import the OpeningComponent
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { CreatePlanComponent } from './pages/createplan/createplan.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewmealComponent } from './pages/newmeal/newmeal.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: OpeninngComponent // Set OpeningComponent as the default route
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'favorite',
    component:FavoritesComponent
  },
  {
    path:'cart',
    component:ShoppingcartComponent
  },
  {
    path:'plan',
    component:CreatePlanComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'new',
    component:NewmealComponent
  },
  {
    path:'setting',
    component:SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
