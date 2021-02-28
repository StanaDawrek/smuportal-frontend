import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AccountManagementComponent } from './account-management/account-management.component';
import { FirmManagementComponent } from './firm-management/firm-management.component';
import { GoogleAnalyticsComponent } from './google-analytics/google-analytics.component';
import { FirmServicesComponent } from './firm-services/firm-services.component';
import { ExtractDocumentComponent } from './extract-document/extract-document.component';
import { SignatureComponent } from './signature/signature.component';
import { CopieConformeComponent } from './copie-conforme/copie-conforme.component';


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
        path: "firm", loadChildren: () =>
          import("./firm-management/firm-management.module").then(
            m => m.FirmModule
          )
      }
    ]
  }
];
@NgModule({
  declarations: [routingComponents, AccountManagementComponent, FirmManagementComponent, GoogleAnalyticsComponent, FirmServicesComponent, ExtractDocumentComponent, SignatureComponent, CopieConformeComponent],
  imports: [CommonModule, RouterModule.forChild(routes),AppRoutingModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class ApplicationsModule { }