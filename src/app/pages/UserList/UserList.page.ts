import { Component } from "@angular/core";
import { UsersService } from "../../services/Users.service";

@Component({
  selector: "user-list",
  templateUrl: "./UserList.page.html",
  styleUrls: ["./UserList.page.css"]
})
export class UserListPage {
  private results = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(result =>
      result.forEach(item => {
        console.log(item.payload.doc.data());
        this.results.push(item.payload.doc.data());
      })
    );
  }
  delete(id: string) {
    console.log("chamou id", id);
    this.usersService.getById(id).subscribe((data: any) => {
      const userKey = data[0].payload.doc.id;
      this.usersService.deleteByKey(userKey);
    });
  }
}
