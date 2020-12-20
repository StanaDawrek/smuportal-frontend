import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '@app/shared';
import {BmsService} from "app/shared/services/bms.service";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  ISBN: String;
  listOfBooks: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  
  constructor(private bmsService: BmsService,private route: ActivatedRoute, private router: Router) {
    
   }

   

  ngOnInit() {
    this.ISBN = this.route.snapshot.paramMap.get('ISBN');
    console.log(this.ISBN);
    const isbn: Number = +this.ISBN;
    this.bmsService.getbookID(isbn).subscribe({
      next: (data: Book[]) => this.listOfBooks.next(data),
      error: (data: any) => console.log(data)
    })
  }
  goToReserve(bookISBN:Number):any {
    this.router.navigate(["/apps/lms/bookmanagement/reserve",bookISBN]);
  }
  bookDetail(bookISBN: Number): any{
    this.router.navigate(["/apps/lms/bookmanagement/details",bookISBN]);
   }
}
