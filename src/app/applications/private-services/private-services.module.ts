import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateMainPageComponent } from './private-main-page/private-main-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: PrivateMainPageComponent
  },
];

@NgModule({
  declarations: [PrivateMainPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class PrivateServicesModule { }
