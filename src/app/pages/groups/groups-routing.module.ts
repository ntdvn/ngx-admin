import { RoleAddComponent } from "./role-add/role-add.component";
import { RoleListComponent } from "./role-list/role-list.component";
import { GroupListComponent } from "./group-list/group-list.component";
import { GroupsComponent } from "./groups.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { GroupAddComponent } from "./group-add/group-add.component";

const routes: Routes = [
  {
    path: "",
    component: GroupsComponent,
    children: [
      {
        path: "list",
        component: GroupListComponent,
      },
      {
        path: "add",
        component: GroupAddComponent,
      },
      {
        path: "roles",
        component: RoleListComponent,
      },
      {
        path: "role-add",
        component: RoleAddComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupsRoutingModule {}
