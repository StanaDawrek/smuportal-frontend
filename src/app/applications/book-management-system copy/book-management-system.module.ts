import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@app/shared/shared.module";
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListBooksComponent } from './list-books/list-books.component';
import { BmsMainPageComponent } from './bms-main-page/bms-main-page.component';
import { BmsAddBookComponent } from './bms-add-book/bms-add-book.component';
import { BmsReserveBookComponent } from './bms-reserve-book/bms-reserve-book.component';

const routes: Routes = [
  {
    path: "",
    component: BmsMainPageComponent
  },
  {
    path: "list",
    component: ListBooksComponent
  },
  {
    path: "add",
    component: BmsAddBookComponent
  },
  {
    path: "reserve",
    component: BmsReserveBookComponent
  }
];
@NgModule({
  declarations: [ListBooksComponent, BmsMainPageComponent, BmsAddBookComponent, BmsReserveBookComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BookManagementSystemModule { }