import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import { BookManagementComponent } from './book-management/book-management.component';
import { SeatsManagementComponent } from './seats-management/seats-management.component';
import {DetailsBookComponent} from './details-book/details-book.component';



const routes: Routes = [
    {path:'bookmanagement', component: BookManagementComponent},
    {path:'seatsmanagement', component: SeatsManagementComponent},
    {path: `detailsbook`, component: DetailsBookComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [BookManagementComponent, SeatsManagementComponent, DetailsBookComponent]