import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import {Book} from '../models/book.model'
import { reservation } from '../models/reservation.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BmsService {
  listOfBooks: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  listOfReservation : BehaviorSubject<reservation[]> = new BehaviorSubject<reservation[]>([]);
 
  selectedbook;
  constructor(private httpClient: HttpClient) { }
  
  
  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>("http://localhost:3000/api/user/getBooks");
  }
  /* getbookbyISBN(bookISBN: Number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`http://localhost:3000/api/user/getBooksbyISBN/${bookISBN}`);
  } */

  addBook(book: Book): void {
    this.httpClient.post<any>("http://localhost:3000/api/user/addBook", book).subscribe({
        next: (data: any) => {
        this.addNewBook(book);
        console.log(data);
       },  
       error: (data: any) => console.warn(data)
      })
 }

 private addNewBook(book: Book) {
   const books: Book[] = this.listOfBooks.getValue();
   books.push(book);
   this.listOfBooks.next(books);
}


private deleteBookByID(bookISBN: Number) {
  const books: Book[] = this.listOfBooks.getValue();
  books.forEach((book, index) => {
    if(book.ISBN === bookISBN) {books.splice(index, 1);}
  })
  this.listOfBooks.next(books);
}

deleteBook(bookISBN: Number): void {
  this.httpClient.delete<any>(`http://localhost:3000/api/user/deleteBook/${bookISBN}`).subscribe({
   next: (data: any) => {
     console.log(data);
     this.deleteBookByID(bookISBN);
   },
   error: (data: any) => console.log(data)
 })
}

getbookbyISBN(bookISBN: Number): any {
  this.httpClient.get<any>(`http://localhost:3000/api/user/getBooksbyISBN/${bookISBN}`).subscribe({
   next: (data: any) => {
    this.getbookbyID(bookISBN);
    console.table(data);
    this.selectedbook=data;
    return data;
    //return this.selectedbook;
   },
   error: (data: any) => console.log(data)
   
 })
}
getbookID(bookISBN:Number): Observable<Book[]> {
  return  this.httpClient.get<any>(`http://localhost:3000/api/user/getBooksbyISBN/${bookISBN}`);
}
private getbookbyID(bookISBN: Number){
  const books: Book[] = this.listOfBooks.getValue();
  books.forEach((book) => {
    if(book.ISBN === bookISBN) {books.find;}
  })
}

getReservation(): Observable<reservation[]> {
    return this.httpClient.get<reservation[]>("http://localhost:3000/api/user/getReservations");
  }

  addReservation(reservation: reservation): void {
    this.httpClient.post<any>("http://localhost:3000/api/user/ReserveBook", reservation)
      .subscribe({
        next: (data: any) => {
         this.addNewReservation(reservation);
         console.log(data);
        },
        error: (data: any) => console.warn(data)
      })
 }
 private addNewReservation(reservation: reservation) {
  const reservations: reservation[] = this.listOfReservation.getValue();
  reservations.push(reservation);
  this.listOfReservation.next(reservations);
}

deleteReservation(ReservationISBN: Number): void {
  this.httpClient.delete<any>(`http://localhost:3000/api/user/deleteReservation/${ReservationISBN}`).subscribe({
   next: (data: any) => {
     console.log(data);
     this.deleteReservationByID(ReservationISBN);
   },
   error: (data: any) => console.log(data)
 })
}
private deleteReservationByID(ReservationISBN: Number) {
  const reservations: reservation[] = this.listOfReservation.getValue();
  reservations.forEach((reservation, index) => {
    if(reservation.ISBN === ReservationISBN) {reservations.splice(index, 1);}
  })
  this.listOfReservation.next(reservations);
 }
 getbookbyMathCategory(): Observable<Book[]> {
   return  this.httpClient.get<any>(`http://localhost:3000/api/user//getBooksByMathCategory`);
}



 }


