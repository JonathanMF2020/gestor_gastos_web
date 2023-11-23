import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const cuenta = localStorage.getItem('cuenta');

    if (!cuenta) {
      this.router.navigate(['/login']);
      return false; // Se deniega el acceso
    }
    return true;
  }
}