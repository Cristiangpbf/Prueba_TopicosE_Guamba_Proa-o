import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TareaService } from './../shared/tarea.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit{
  @Input() idTask;
  updateBookingForm: FormGroup;
  id: any;
  constructor(
    private aptService: TareaService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    //this.id = this.actRoute.snapshot.paramMap.get('id');
    this.id = this.idTask;
    console.log("ID",this.id)
    this.aptService.getBooking(this.id).valueChanges().subscribe(res => {
      this.updateBookingForm.setValue(res);
    });
    
    this.updateBookingForm = this.fb.group({
      name: [''],
      date: ['']
    })
    console.log(this.updateBookingForm.value)
  }

  updateForm() {
    this.id = this.idTask;
    console.log("ID ac",this.id)
    this.aptService.updateBooking(this.id, this.updateBookingForm.value)
      .then(() => {
        this.modalCtrl.dismiss();
      })
      .catch(error => console.log(error));
  }

  exitModal(){
    this.modalCtrl.dismiss();
  }

}
