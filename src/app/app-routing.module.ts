import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserListPage } from "./pages/UserList/UserList.page";
import { UserComponent } from "./pages/User/User.page";
import { LoginComponent } from "./pages/Login/Login.page";

const routes: Routes = [
  { path: "admin", component: LoginComponent },
  { path: "list", component: UserListPage },
  { path: "user/:id", component: UserComponent },
  { path: "user", component: UserComponent },
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
