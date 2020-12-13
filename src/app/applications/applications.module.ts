import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {BookManagementComponent} from '../applications/book-management/book-management.component';

const routes: Routes = [
  {
    path: "apps", children: [
      {
        path: "logistics", loadChildren: () =>
          import("./logistics-reservation/logistics-reservation.module").then(
            m => m.LogisticsReservationModule
          )
      },
      {
        path: "lms", loadChildren: () =>
          import("./book-management-system copy/book-management-system.module").then(
            m => m.BookManagementSystemModule
          )
      },
      {
        path: "lms/bookmanagement", loadChildren: () =>
          import("./book-management/book-management.module").then(
            m => m.BookManagementModule
          )
      },
    ]
  }
];
@NgModule({
  declarations: [BookManagementComponent,routingComponents],
  imports: [CommonModule, RouterModule.forChild(routes),AppRoutingModule],
  exports: [RouterModule]
})
export class ApplicationsModule { }