import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AccountManagementComponent } from './account-management/account-management.component';
import { FirmManagementComponent } from './firm-management/firm-management.component';
import { GoogleAnalyticsComponent } from './google-analytics/google-analytics.component';
import { FirmServicesComponent } from './firm-services/firm-services.component'; 
import { SignatureComponent } from './signature/signature.component'; 
import { CopieConformeComponent } from './copie-conforme/copie-conforme.component'; 
import { ExtractDocumentComponent } from './extract-document/extract-document.component'; 




const routes: Routes=[
    {path: `accountmanagement`, component: AccountManagementComponent},
    {path: `firmsmanagement`, component: FirmManagementComponent},
    {path: `googleanalytics`, component: GoogleAnalyticsComponent},
    {path: `firmservices`, component: FirmServicesComponent },
    {path: `signature`, component: SignatureComponent },
    {path: `copieconforme`, component: CopieConformeComponent },
    {path: `extractdocument`, component: ExtractDocumentComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [GoogleAnalyticsComponent,AccountManagementComponent,FirmManagementComponent]