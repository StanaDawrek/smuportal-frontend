import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms'
import { Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FirmService} from 'app/shared/services/firm.service';
import {firm} from 'app/shared/models/firm.model';

@Component({
  selector: 'app-add-firm',
  templateUrl: './add-firm.component.html',
  styleUrls: ['./add-firm.component.css']
})
export class AddFirmComponent implements OnInit {
  FirmForm: any;
  FirmAdded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private formBuilder: FormBuilder, private FirmService: FirmService,
    private router: Router) {
     this.FirmForm = this.formBuilder.group({
      Name:"",
      Sector: "",
      Industry: 0,
      PublicPrivate: "",
      Address:"",
      Registration: 0,
      Email: ""
      
     })
   }
 
   ngOnInit() {
    
   }
   ngOnDestroy() {
   }
   onSubmit(firm: firm) {
     this.FirmForm.reset();
     console.warn("Firm Data:", firm);
     this.FirmService.addFirm(firm);
     this.FirmAdded.next(true);
     
   }
 
   goBack() {
     this.router.navigate(["/firmsmanagement"]);
   }
 }

 


  