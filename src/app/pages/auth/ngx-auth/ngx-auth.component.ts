import { Component, OnInit } from "@angular/core";
import { NbAuthComponent } from "@nebular/auth";
import {
  NbAlertModule,
  NbButtonModule,
  NbCardBodyComponent,
  NbCardComponent,
  NbCheckboxModule,
  NbInputModule,
  NbLayoutColumnComponent,
  NbLayoutComponent,
} from "@nebular/theme";

@Component({
  selector: "ngx-ngx-auth",
  templateUrl: "./ngx-auth.component.html",
  styleUrls: ["./ngx-auth.component.scss"],
})
export class NgxAuthComponent extends NbAuthComponent implements OnInit {
  ngOnInit(): void {}
}
