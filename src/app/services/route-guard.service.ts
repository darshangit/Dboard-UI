import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(public loginService: LoginService, public router: Router) { }

  canActivate(): boolean {
    if (!this.loginService.getIsValidUser()) {
      this.router.navigate(['app-login']);
      return false;
    }
    return true;
  }
}
