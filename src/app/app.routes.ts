import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { PlaceDetailComponent } from './pages/place-detail/place-detail';
import { ProfileComponent } from './pages/profile/profile';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'place', component: PlaceDetailComponent },
  { path: 'profile', component: ProfileComponent }, // ⭐ NUEVO
  { path: '**', redirectTo: '' }
];
