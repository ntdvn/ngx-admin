import { UsersComponent } from "./users.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    // children: [
    //   {
    //     path: 'smart-table',
    //     component: SmartTableComponent,
    //   },
    //   {
    //     path: 'tree-grid',
    //     component: TreeGridComponent,
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
