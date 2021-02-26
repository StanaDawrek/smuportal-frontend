import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateMainPageComponent } from './private-main-page/private-main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: "",
    component: PrivateMainPageComponent
  },
  {
    path:"services/:Registration",
    component: ServicesComponent
  }
];

@NgModule({
  declarations: [PrivateMainPageComponent, ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class PrivateServicesModule { }
