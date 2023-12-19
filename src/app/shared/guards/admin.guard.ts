import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.authService.isUserAdmin())
    if (this.authService.isUserAdmin()) {
        console.log("admin")
        return true;
    } else {
        alert("not admin")
      this.router.navigate(['/system/home']);
      return false;
    }
  }
}
