import { Component, OnInit } from '@angular/core';
import { firm } from '@app/shared/models/firm.model';
import {FirmService} from "app/shared/services/firm.service";
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-public-main-page',
  templateUrl: './public-main-page.component.html',
  styleUrls: ['./public-main-page.component.css']
})
export class PublicMainPageComponent implements OnInit {

  listOfFirms: BehaviorSubject<firm[]> = new BehaviorSubject<firm[]>([]);
  FirmRemoved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private FirmService: FirmService, private router: Router) { 
  }
  ngOnInit() {
    this.FirmService.getFirmByPublicSector().subscribe({
      next: (data: firm[]) => this.listOfFirms.next(data),
      error: (data: any) => console.log(data)
    })
  }
  ngOnDestroy(){

  }
}