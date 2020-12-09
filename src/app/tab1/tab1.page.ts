import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarea } from '../shared/Tarea';
import { Tab3Page } from '../tab3/tab3.page';
import { TareaService } from './../shared/tarea.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  Bookings = [];

  constructor(private aptService: TareaService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.fetchBookings();
    let bookingRes = this.aptService.getBookingList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as Tarea);
      })
    })

  }

  fetchBookings() {
    this.aptService.getBookingList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteBooking(id) {
    console.log(id)
    if (window.confirm('Estas seguro que deseas eliminar?')) {
      this.aptService.deleteBooking(id)
    }
  }

  async editModal(id){
    console.log("El id",id);
    const modal = await this.modalCtrl.create({
      component: Tab3Page,
      componentProps: {
        idTask: id
      }
    });
    await modal.present();

  }

}