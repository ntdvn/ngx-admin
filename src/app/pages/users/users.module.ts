import { UsersComponent } from "./users.component";
import { UsersRoutingModule } from "./users-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { UserListComponent } from "./user-list/user-list.component";
import { UserAddComponent } from "./user-add/user-add.component";
import { ThemeModule } from "../../@theme/theme.module";
import { FormsRoutingModule } from "../forms/forms-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    UsersRoutingModule,
    Ng2SmartTableModule,
    CommonModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    NbIconModule,
    FormsModule,
  ],
  declarations: [UsersComponent, UserListComponent, UserAddComponent],
})
export class UsersModule {}
