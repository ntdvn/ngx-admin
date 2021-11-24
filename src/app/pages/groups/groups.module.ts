import { GroupsRoutingModule } from "./groups-routing.module";
import { GroupListComponent } from "./group-list/group-list.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RolesComponent } from "./roles/roles.component";

@NgModule({
  declarations: [GroupListComponent, RolesComponent],
  imports: [GroupsRoutingModule, CommonModule],
})
export class GroupsModule {}
