import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';

const routes: Routes = [
  {
    path: "",
    component: AdminMainPageComponent
  },
  {
    path: "list",
    component: ListUsersComponent
  },
];

@NgModule({
  declarations: [ListUsersComponent, AdminMainPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AdminPanelModule { }
