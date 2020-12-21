import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms'
import { Router} from '@angular/router';
import { BmsService, Book } from '@app/shared';
import { BehaviorSubject } from 'rxjs';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-bms-add-book',
  templateUrl: './bms-add-book.component.html',
  styleUrls: ['./bms-add-book.component.css']
})
export class BmsAddBookComponent implements OnInit, OnDestroy{
  bookForm: any;
  bookAdded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  Book: Book;
  imageData: string;

  constructor(private formBuilder: FormBuilder, private bmsService: BmsService,
   private router: Router) {
    this.bookForm = this.formBuilder.group({
      Title: "",
      Author: "",
      ISBN: 0,
      description: "",
      category:"",
      publishDate: Date.now,
      pageCount: 0,
      createdAt: Date.now,
      NumberOfCopies: 0,
      imagePath: ""
    })
  }

  ngOnInit() : void {
    this.bookForm = new FormGroup({
      Title: new FormControl(null),
      Author: new FormControl(null),
      ISBN: new FormControl(null),
      description: new FormControl(null),
      category: new FormControl(null),
      publishDate: new FormControl(null),
      pageCount: new FormControl(null),
      createdAt: new FormControl(null),
      NumberOfCopies: new FormControl(null),
      imagePath: new FormControl(null),
    });
  }
  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.bookForm.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
        console.log(this.imageData);
      };
      reader.readAsDataURL(file);
    }
  }

  ngOnDestroy() {
  }
  onSubmit(book: Book) {
    this.bookForm.reset();
    console.warn("Book Data:", book);
    this.bmsService.addBook(book);
    this.bookAdded.next(true);
    this.imageData = null;
  }

  goBack() {
    this.router.navigate(["/apps/lms"]);
  }
}