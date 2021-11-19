import { UsersComponent } from "./users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbCardModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

@NgModule({
  declarations: [UsersComponent],
  imports: [
    UsersRoutingModule,
    CommonModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
})
export class UsersModule {}
