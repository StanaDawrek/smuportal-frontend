import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardLibraryComponent } from './dashboard-library.component';
import { FeatureCardComponent } from './feature-card';
import { ListOfFeaturesComponent } from './list-of-features';
import { WelcomeUserComponent } from './welcome-user';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
 {
   path: 'dashboard-library',
   component: DashboardLibraryComponent
 }
];

@NgModule({
  declarations: [
    DashboardLibraryComponent,
    FeatureCardComponent,
    ListOfFeaturesComponent,
    WelcomeUserComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class DashboardModule { }
