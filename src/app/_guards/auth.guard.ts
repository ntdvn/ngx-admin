import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { NbAuthService } from "@nebular/auth";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private authService: NbAuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map((authenticated) => {
        console.log("AuthGuard");
        console.log(state.url);
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(["auth/login"]);
          return false;
        }
      })
    );
  }
}
