import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { NbAuthModule } from "@nebular/auth";
import {
  NbAlertModule,
  NbButtonModule,
  NbCardBodyComponent,
  NbCardComponent,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbLayoutColumnComponent,
  NbLayoutComponent,
  NbLayoutModule,
} from "@nebular/theme";
import { LoginComponent } from "./login/login.component";
import { NgxAuthRoutingModule } from "./ngx-auth-routing.module";
import { NgxRegisterComponent } from "./ngx-register/ngx-register.component";
import { NgxAuthComponent } from "./ngx-auth/ngx-auth.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    NbAuthModule,
    NbLayoutModule,
    NbCardModule,
    TranslateModule,
  ],
  declarations: [
    NgxAuthComponent,
    LoginComponent,
    NgxRegisterComponent,
    NgxAuthComponent, //
  ],
})
export class NgxAuthModule {}
