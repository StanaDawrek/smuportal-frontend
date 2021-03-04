import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  listOfUsers: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
 
  constructor(private httpClient: HttpClient) { }

 
  getUser(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:3000/api/user/getUsers");
  }
  private deleteUserByID(universityID: Number) {
    const users: User[] = this.listOfUsers.getValue();
    users.forEach((User, index) => {
      if(User.universityID === universityID) {users.splice(index, 1);}
    })
    this.listOfUsers.next(users);
  }
  deleteUser(universityID: Number): void {
    this.httpClient.delete<any>(`http://localhost:3000/api/user/deleteUser/${universityID}`).subscribe({
     next: (data: any) => {
       console.log(data);
       this.deleteUserByID(universityID);
     },
     error: (data: any) => console.log(data)
   })
  }
}
