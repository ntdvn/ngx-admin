import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApplicationGroup } from "../_models/application_group";

@Injectable({
  providedIn: "root",
})
export class GroupsService {
  private readonly URL = "https://localhost:5001/api/application_groups";

  applicationGroups: Observable<ApplicationGroup[]>;

  constructor(private http: HttpClient) {}

  readGroups() {
    this.applicationGroups = this.http.get<ApplicationGroup[]>(this.URL);
  }
}
