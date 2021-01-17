import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import {BookManagementComponent} from '../applications/book-management/book-management.component';
import {BookManagementAdminComponent} from '../applications/book-management-admin/book-management-admin.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AccountManagementComponent } from './account-management/account-management.component';
import { FirmManagementComponent } from './firm-management/firm-management.component';
import { GoogleAnalyticsComponent } from './google-analytics/google-analytics.component';

const routes: Routes = [
  {
    path: "apps", children: [
      {
        path: "publics", loadChildren: () =>
          import("./public-services/public-services.module").then(
            m => m.PublicServicesModule
          )
      },
      {
        path: "privates", loadChildren: () =>
          import("./private-services/private-services.module").then(
            m => m.PrivateServicesModule
          )
      },
      {
        path: "admin", loadChildren: () =>
          import("./admin-panel/admin-panel.module").then(
            m => m.AdminPanelModule
          )
      },
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
      {
        path: "bms", loadChildren: () =>
          import("./book-management-system-admin/book-management-system-admin.module").then(
            m => m.BookManagementSystemAdminModule
          )
      },
      {
        path: "bms/bookmanagementadmin", loadChildren: () =>
          import("./book-management-admin/book-management-admin.module").then(
            m => m.BookManagementAdminModule
          )
      }
    ]
  }
];
@NgModule({
  declarations: [BookManagementComponent,routingComponents, BookManagementAdminComponent, AccountManagementComponent, FirmManagementComponent, GoogleAnalyticsComponent],
  imports: [CommonModule, RouterModule.forChild(routes),AppRoutingModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class ApplicationsModule { }