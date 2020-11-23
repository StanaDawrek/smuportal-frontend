import { Component, OnDestroy, OnInit } from '@angular/core';
import {BmsService} from "app/shared/services/bms.service";
import { Book } from "@app/shared/models";
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit, OnDestroy {

  listOfBooks: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  bookRemoved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private bmsService: BmsService, private router: Router) { 
  }
  ngOnInit() {
    this.bmsService.getBooks().subscribe({
      next: (data: Book[]) => this.listOfBooks.next(data),
      error: (data: any) => console.log(data)

    })
  }
  ngOnDestroy(){

  }
  goToAdd() {
    this.router.navigate(["/apps/bms/add"]);
  }
  deleteBook(bookISBN: Number) {
    this.bmsService.deleteBook(bookISBN);
    this.bookRemoved.next(true);
  }
}
