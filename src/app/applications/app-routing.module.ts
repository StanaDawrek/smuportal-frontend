import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { BookManagementComponent } from './book-management/book-management.component';
import { SeatsManagementComponent } from './seats-management/seats-management.component';

const routes: Routes = [
    {path:'bookmanagement', component: BookManagementComponent},
    {path:'seatsmanagement', component: SeatsManagementComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [BookManagementComponent, SeatsManagementComponent]