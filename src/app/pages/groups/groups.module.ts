import { GroupsComponent } from "./groups.component";
import { GroupsRoutingModule } from "./groups-routing.module";
import { GroupListComponent } from "./group-list/group-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeModule } from "../../@theme/theme.module";
import { GroupAddComponent } from "./group-add/group-add.component";
import { RoleListComponent } from "./role-list/role-list.component";
import { RoleAddComponent } from "./role-add/role-add.component";

@NgModule({
  imports: [GroupsRoutingModule, CommonModule, ThemeModule],
  declarations: [
    GroupsComponent,
    GroupListComponent,
    GroupAddComponent,
    RoleListComponent,
    RoleAddComponent,
  ],
})
export class GroupsModule {}
