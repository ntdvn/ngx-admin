import { NbAuthComponent } from "@nebular/auth";
import { NgxAuthComponent } from "./ngx-auth/ngx-auth.component";
import { NgxRegisterComponent } from "./ngx-register/ngx-register.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
  {
    path: "",
    component: NbAuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: NgxRegisterComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxAuthRoutingModule {}
