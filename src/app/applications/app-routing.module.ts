import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { BookManagementComponent } from './book-management/book-management.component';
import { BookManagementAdminComponent } from './book-management-admin/book-management-admin.component';
import { SeatsManagementComponent } from './seats-management/seats-management.component';
import {DetailsBookComponent} from './details-book/details-book.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { FirmManagementComponent } from './firm-management/firm-management.component';
import { GoogleAnalyticsComponent } from './google-analytics/google-analytics.component';



const routes: Routes=[
    {path:'bookmanagement', component: BookManagementComponent},
    {path:'bookmanagementadmin', component: BookManagementAdminComponent},
    {path:'seatsmanagement', component: SeatsManagementComponent},
    {path: `detailsbook`, component: DetailsBookComponent},
    {path: `accountmanagement`, component: AccountManagementComponent},
    {path: `firmsmanagement`, component: FirmManagementComponent},
    {path: `googleanalytics`, component: GoogleAnalyticsComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [BookManagementComponent,GoogleAnalyticsComponent,AccountManagementComponent,FirmManagementComponent, SeatsManagementComponent, DetailsBookComponent]