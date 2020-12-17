import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {BmsService} from "app/shared/services/bms.service";
import { Book, reservation } from "@app/shared/models";
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css']
})
@Input()
export class BookManagementComponent implements OnInit {
  listOfBooks: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  bookRemoved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  listOfReservation: BehaviorSubject<reservation[]> = new BehaviorSubject<reservation[]>([]);
  reservationRemoved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  
  constructor(private bmsService: BmsService, private router: Router) { 
  }
  ngOnInit() {
    this.bmsService.getBooks().subscribe({
      next: (data: Book[]) => this.listOfBooks.next(data),
      error: (data: any) => console.log(data)
    })
    this.bmsService.getReservation().subscribe({
        next: (data: reservation[]) => this.listOfReservation.next(data),
        error: (data: any) => console.log(data)
  
    })
  }
  ngOnDestroy(){

  }
  goToAdd() {
    this.router.navigate(["/apps/lms/add"]);
  }
  deleteBook(bookISBN: Number) {
    this.bmsService.deleteBook(bookISBN);
    this.bookRemoved.next(true);
  }
  //getbookbyISBN(bookISBN: Number){
    //this.router.navigateByUrl("/detailsbook/");
  ///}

  goToReserve() {
    this.router.navigate(["/apps/lms/reserve"]);
  }
  deleteReservation(ReservationISBN: Number) {
    this.bmsService.deleteReservation(ReservationISBN);
    this.reservationRemoved.next(true);
  }
}

