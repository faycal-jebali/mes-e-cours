import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./client/client.module").then((mod) => mod.ClientModule),
  },
  {
    path: "administrator",
    loadChildren: () =>
      import("./admin/admin.module").then((mod) => mod.AdminModule),
    canActivate: [AuthGuard],
  },
  { path: "**", redirectTo: "/" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
