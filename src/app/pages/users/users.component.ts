import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../@core/data/smart-table";

@Component({
  selector: "ngx-users",
  template: `<router-outlet></router-outlet>`,
})
export class UsersComponent implements OnInit {
  ngOnInit(): void {}
}
