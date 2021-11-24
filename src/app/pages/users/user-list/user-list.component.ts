import { Component, OnInit } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../@core/data/smart-table";

@Component({
  selector: "ngx-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: true,
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: "ID",
        type: "number",
      },
      username: {
        title: "Username",
        type: "string",
      },
      firstName: {
        title: "Full Name",
        type: "string",
      },
      email: {
        title: "E-mail",
        type: "string",
      },
      age: {
        title: "Age",
        type: "number",
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onUserRowSelect(event): void {
    console.log(event);
  }
}
