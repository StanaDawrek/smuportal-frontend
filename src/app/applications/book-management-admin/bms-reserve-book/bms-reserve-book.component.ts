import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms'
import { ActivatedRoute, Router} from '@angular/router';
import { BmsService, Book } from '@app/shared';
import { reservation } from '@app/shared/models/reservation.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-bms-reserve-book',
  templateUrl: './bms-reserve-book.component.html',
  styleUrls: ['./bms-reserve-book.component.css']
})
export class BmsReserveBookComponent implements OnInit,OnDestroy {
  reservationForm: any;
  reservationAdded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  ISBN: String;
  bookISBN: Number;

  constructor(private formBuilder: FormBuilder, private bmsService: BmsService,
   private router: Router,private route: ActivatedRoute) {
    this.ISBN = this.route.snapshot.paramMap.get('ISBN');
    const isbn: Number = +this.ISBN;
    this.reservationForm = this.formBuilder.group({
     startDay: Date.now,
     endDay:Date.now,
     ISBN:isbn,
    })
  }

  ngOnInit() {
   
  }
  ngOnDestroy() {
  }
  onSubmit(reservationBook: reservation) {
    this.reservationForm.reset();
    console.warn("Book Data:", reservationBook);
    this.bmsService.addReservation(reservationBook);
    this.reservationAdded.next(true);
  }

  goBack() {
    this.router.navigate(["/apps/lms"]);
  }

}
