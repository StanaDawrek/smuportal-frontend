import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@app/shared/shared.module";
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListBooksComponent } from './list-books/list-books.component';
import { BmsAddBookComponent } from './bms-add-book/bms-add-book.component';
import { BmsReserveBookComponent } from './bms-reserve-book/bms-reserve-book.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
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
  },
  {
    path:"details/:ISBN",
    component: DetailsComponent
  }
];
@NgModule({
  declarations: [ListBooksComponent, BmsAddBookComponent, BmsReserveBookComponent, DetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class BookManagementModule { }