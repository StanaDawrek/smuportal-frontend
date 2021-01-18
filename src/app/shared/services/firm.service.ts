import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { firm } from '../models/firm.model';


@Injectable({
  providedIn: 'root'
})
export class FirmService {

  listOfFirms: BehaviorSubject<firm[]> = new BehaviorSubject<firm[]>([]);
 
  constructor(private httpClient: HttpClient) { }

 
  getFirm(): Observable<firm[]> {
    return this.httpClient.get<firm[]>("http://localhost:3000/api/user/getFirms");
  }
  private deleteUserByID(Registration: Number) {
    const firms: firm[] = this.listOfFirms.getValue();
    firms.forEach((firm, index) => {
      if(firm.Registration === Registration) {firms.splice(index, 1);}
    })
    this.listOfFirms.next(firms);
  }
  
  deleteUser(Registration: Number): void {
    this.httpClient.delete<any>(`http://localhost:3000/api/user/deleteUser/${Registration}`).subscribe({
     next: (data: any) => {
       console.log(data);
       this.deleteUserByID(Registration);
     },
     error: (data: any) => console.log(data)
   })
  }
  addFirm(firm: firm): void {
    this.httpClient.post<any>("http://localhost:3000/api/user/addFirm", firm).subscribe({
        next: (data: any) => {
        this.addNewFirm(firm);
        console.log(data);
       },  
       error: (data: any) => console.warn(data)
      })
 }

 private addNewFirm(firm: firm) {
   const firms: firm[] = this.listOfFirms.getValue();
   firms.push(firm);
   this.listOfFirms.next(firms);
}
}
