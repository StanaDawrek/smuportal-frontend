import { Component, OnInit } from '@angular/core';
import { firm } from '@app/shared/models/firm.model';
import {FirmService} from "app/shared/services/firm.service";
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-firm-management',
  templateUrl: './firm-management.component.html',
  styleUrls: ['./firm-management.component.css']
})
export class FirmManagementComponent implements OnInit {

  listOfFirms: BehaviorSubject<firm[]> = new BehaviorSubject<firm[]>([]);
  FirmRemoved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  Name: string;
  constructor(private FirmService: FirmService, private router: Router) { 
  }
  ngOnInit() {
    this.FirmService.getFirm().subscribe({
      next: (data: firm[]) => this.listOfFirms.next(data),
      error: (data: any) => console.log(data)
    })
   
  }
  ngOnDestroy(){

  }
  AddFirm() {
    this.router.navigate(["/apps/firm/add"]);
  }

  deleteFirm(Registration: Number) {
    this.FirmService.deleteFirm(Registration);
    this.FirmRemoved.next(true);
  }
}
