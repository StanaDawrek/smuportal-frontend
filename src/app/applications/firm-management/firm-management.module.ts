import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@app/shared/shared.module";
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddFirmComponent  } from './add-firm/add-firm.component';

const routes: Routes = [
  {
    path: "add",
    component: AddFirmComponent
  }
];
@NgModule({
  declarations: [AddFirmComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class FirmModule { }