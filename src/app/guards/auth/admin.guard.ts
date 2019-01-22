import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAdminUser) {
    return true;
  }
    this.router.navigate(['/']);
}
}