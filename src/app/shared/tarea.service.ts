import { Injectable } from '@angular/core';
import { Tarea } from '../shared/Tarea';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createBooking(apt: Tarea) {
    return this.bookingListRef.push({
      name: apt.name,
      date: apt.date
    })
  }

  // Get Single
  getBooking(id: string) {
    this.bookingRef = this.db.object('/tarea/' + id);
    return this.bookingRef;
  }

  // Get List
  getBookingList() {
    this.bookingListRef = this.db.list('/tarea');
    return this.bookingListRef;
  }

  // Update
  updateBooking(id, apt: Tarea) {
    return this.bookingRef.update({
      name: apt.name,
      date: apt.date
    })
  }

  // Delete
  deleteBooking(id: string) {
    this.bookingRef = this.db.object('/tarea/' + id);
    this.bookingRef.remove();
  }

}
