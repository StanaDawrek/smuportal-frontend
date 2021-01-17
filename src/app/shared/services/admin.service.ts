import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<User[]> {
    return this.httpClient.get<User[]>("http://localhost:3000/api/user");
  }
}
