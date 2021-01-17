import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicMainPageComponent } from './public-main-page/public-main-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: PublicMainPageComponent
  },
];

@NgModule({
  declarations: [PublicMainPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

@NgModule({
  declarations: [PublicMainPageComponent],
  imports: [
    CommonModule
  ]
})
export class PublicServicesModule { }
