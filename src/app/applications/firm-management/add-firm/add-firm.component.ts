import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms'
import { Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FirmService} from 'app/shared/services/firm.service';
import {firm} from 'app/shared/models/firm.model';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-add-firm',
  templateUrl: './add-firm.component.html',
  styleUrls: ['./add-firm.component.css']
})
export class AddFirmComponent implements OnInit {
  FirmForm: any;
  FirmAdded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  imageData: string;

  constructor(private formBuilder: FormBuilder, private FirmService: FirmService,
    private router: Router) {
     this.FirmForm = this.formBuilder.group({
      Name:"",
      Sector: "",
      Industry: "",
      PublicPrivate: "",
      Address:"",
      Registration: 0,
      Email: "",
      imagePath: ""
     })
   }
 
   ngOnInit(): void {
    this.FirmForm = new FormGroup({
      Name: new FormControl(null),
      Sector: new FormControl(null),
      Industry: new FormControl(null),
      PublicPrivate: new FormControl(null),
      Address: new FormControl(null),
      Registration: new FormControl(null),
      Email: new FormControl(null),
      imagePath: new FormControl(null),
    });
   }
   ngOnDestroy() {
   }
   onSubmit(firm: firm) {
     this.FirmForm.reset();
     console.warn("Firm Data:", firm);
     this.FirmService.addFirm(firm);
     this.FirmAdded.next(true);
     this.imageData = null;
   }
   onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.FirmForm.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
        console.log(this.imageData);
      };
      reader.readAsDataURL(file);
    }
  }
   goBack() {
     this.router.navigate(["/firmsmanagement"]);
   }
 }

 


  