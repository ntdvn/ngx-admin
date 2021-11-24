import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { NbAuthService } from "@nebular/auth";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LoggedGuard implements CanActivate {
  constructor(private authService: NbAuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map((authenticated) => {
        console.log("LoggedGuard");
        console.log(state.url);
        console.log(authenticated);

        if (authenticated) {
          console.log(authenticated);
          this.router.navigate(["pages"]);
          return false;
        }
        return true;
      })
    );
  }
}
