import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { AutheService } from './auth-guard/authe.service';
import { HomeComponent } from './home/home.component';
import { LhomeComponent } from './lhome/lhome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [

  { path: '', component: LhomeComponent },
  {
    path: 'audio', component: AudioPlayerComponent,
    canActivate: [AutheService]
  },
  {
    path: 'home', component: HomeComponent,
    canActivate: [AutheService]
  },
  {
    path: 'result', component: SearchResultComponent,
    canActivate: [AutheService]
  },
  { path: 'login', component: LoginComponent },
  { path: 'main-home', component: LhomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: LhomeComponent },
];

export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(routes);
