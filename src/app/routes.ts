import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { ServiceRestartComponent } from './service-restart/service-restart.component';
import { RouteGuardService } from './services/route-guard.service';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/app-login', pathMatch: 'full' },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-service-restart', component: ServiceRestartComponent, canActivate: [RouteGuardService] }
];
