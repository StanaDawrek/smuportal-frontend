import { Component, OnInit } from '@angular/core';
import {BookManagementComponent} from '../applications/book-management/book-management.component';
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor(private BookManagementComponent: ApplicationComponent) { }

  ngOnInit() {
  }

}
