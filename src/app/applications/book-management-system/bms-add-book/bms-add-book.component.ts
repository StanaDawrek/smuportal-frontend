import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms'
import { Router} from '@angular/router';
import { BmsService, Book } from '@app/shared';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-bms-add-book',
  templateUrl: './bms-add-book.component.html',
  styleUrls: ['./bms-add-book.component.css']
})
export class BmsAddBookComponent implements OnInit, OnDestroy{
  bookForm: any;
  bookAdded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private formBuilder: FormBuilder, private bmsService: BmsService,
   private router: Router) {
    this.bookForm = this.formBuilder.group({
      Title: "",
      Author: "",
      ISBN: 0,
      description: "",
      publishDate: null,
      pageCount: 0,
      createdAt: null,
      NumberOfCopies: 0,
    })
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  onSubmit(book: Book) {
    this.bookForm.reset();
    console.warn("Book Data:", book);
    this.bmsService.addBook(book);
    this.bookAdded.next(true);
  }

  goBack() {
    this.router.navigate(["/apps/bms"]);
  }
}