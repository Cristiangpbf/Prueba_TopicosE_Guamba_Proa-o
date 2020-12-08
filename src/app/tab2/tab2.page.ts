import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { TareaService } from './../shared/tarea.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  bookingForm: FormGroup;

  constructor(
    private aptService: TareaService,
    private router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.bookingForm = this.fb.group({
      name: [''],
      date: ['']
    })
  }

  formSubmit() {
    if (!this.bookingForm.valid) {
      return false;
    } else {
      this.aptService.createBooking(this.bookingForm.value).then(res => {
        console.log(res)
        this.bookingForm.reset();
        this.router.navigate(['/tab1']);
      })
        .catch(error => console.log(error));
    }
  }

}
