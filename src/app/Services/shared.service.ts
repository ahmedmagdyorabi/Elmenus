import { Injectable } from '@angular/core';
import { Iorder } from '../ViewModels/iorder';
import { User } from '../ViewModels/iusers';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  valueSearched: string = '';
  loggedInUser: User;
  orderList: Iorder[];
  returantName: string;

  constructor() { }

  setValueSearched(restaurant: string): void {
    this.valueSearched = restaurant;

  }
  getValueSearched(): String {
    return this.valueSearched;
  }
  setLoggedInUser(user: User): void {
    this.loggedInUser = user;
  }
  getLoggedInUser(): User {

    return this.loggedInUser;


  }

  setOrderList(order: Iorder[]): void {
    this.orderList = order
  }

  getOrderList(): Iorder[] {
    return this.orderList
  }

  setResturantName(restName: string): void {
    this.returantName = restName;
  }

  getResturantName(): string {
    return this.returantName
  }

}
