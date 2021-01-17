import { Component, OnDestroy, OnInit } from '@angular/core';
import {AdminService} from "app/shared/services/admin.service";
import { Book, reservation, User } from "@app/shared/models";
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.css']
})
export class AccountManagementComponent implements OnInit {

  listOfUsers: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  UserRemoved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private AdminService: AdminService, private router: Router) { 
  }
  ngOnInit() {
    this.AdminService.getUser().subscribe({
      next: (data: User[]) => this.listOfUsers.next(data),
      error: (data: any) => console.log(data)
    })
   
  }
  ngOnDestroy(){

  }

  deleteUser(universityID: Number) {
    this.AdminService.deleteUser(universityID);
    this.UserRemoved.next(true);
  }
 
}


