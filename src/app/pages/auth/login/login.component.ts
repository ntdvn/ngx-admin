import { TranslateService } from "@ngx-translate/core";
import { ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  NbAuthService,
  NbLoginComponent,
  NB_AUTH_OPTIONS,
} from "@nebular/auth";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent extends NbLoginComponent implements OnInit {
  constructor(
    service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) options: {},
    cd: ChangeDetectorRef,
    router: Router,
    translateService: TranslateService
  ) {
    super(service, options, cd, router);
  }
  ngOnInit(): void {}
}
