import { GroupsService } from "./../../../_services/groups.service";
import { Component, OnInit } from "@angular/core";
import { ApplicationGroup } from "../../../_models/application_group";

@Component({
  selector: "ngx-role-list",
  templateUrl: "./role-list.component.html",
  styleUrls: ["./role-list.component.scss"],
})
export class RoleListComponent implements OnInit {
  constructor(private groupsService: GroupsService) {}
  applicationGroups: ApplicationGroup[];

  ngOnInit(): void {
    this.groupsService.applicationGroups.subscribe((data) => {
      this.applicationGroups = data;
    });
  }
}
