import { Component, OnInit } from "@angular/core";
import { NbRegisterComponent } from "@nebular/auth";

@Component({
  selector: "ngx-ngx-register",
  templateUrl: "./ngx-register.component.html",
  styleUrls: ["./ngx-register.component.scss"],
})
export class NgxRegisterComponent
  extends NbRegisterComponent
  implements OnInit
{
  ngOnInit(): void {}
}
