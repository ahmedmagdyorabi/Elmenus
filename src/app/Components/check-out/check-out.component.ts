import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/Services/orders.service';
import { SharedService } from 'src/app/Services/shared.service';
import { UserService } from 'src/app/Services/user.service';
import { Iorder } from 'src/app/ViewModels/iorder';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, DoCheck {

  registeredAddress: boolean = false;
  payCash: boolean = false;
  paymentMethod: FormGroup;
  price: number = 12
  totalItemPrice: number = 0;
  itemCount: number = 1;
  deliveryFee: number = 11;
  totalOrderPrice: number = 0;
  myOrder: Iorder[] = []
  restName: string;
  userEmail: string;
  clientPhone: number;
  deliveryAddress: string


  constructor(fb: FormBuilder, private shService: SharedService, private uSerice: UserService,
    private oService: OrdersService, private router: Router) {
    this.paymentMethod = fb.group({
      method: ["Credit", Validators.required]
    })


  }
  ngDoCheck(): void {
    if (this.paymentMethod.value.method === "Cash") {
      this.payCash = true
    } else {
      this.payCash = false
    }
    //this.totalItemPrice = this.price * this.itemCount
    this.myOrder.forEach(item => {
      item.total = item.price * item.quantity
    })

    this.totalItemPrice = this.myOrder.map(item => item.total).reduce(function (a, b) {
      return a + b
    })

    this.totalOrderPrice = this.totalItemPrice + this.deliveryFee
  }

  ngOnInit(): void {
    console.log(this.paymentMethod.value.method)
    this.myOrder = this.shService.getOrderList();
    this.restName = this.shService.getResturantName();
    this.userEmail = localStorage.getItem('User');
    this
  }

  deleteFromOrder(i: number) {
    if (this.myOrder.length > 1) {
      this.myOrder.splice(i, 1)
    } else {
      this.myOrder.splice(i, 1, { meal: "meal", price: 0, quantity: 0 })
    }
    console.log(this.myOrder)
  }

  checkOut() {
    if (this.registeredAddress) {
      this.deliveryAddress = 'Nasr City, Cairo'
    }
    this.oService.addOrder({ userEmail: this.userEmail, order: this.myOrder, totalprice: this.totalOrderPrice, deliveryfee: this.deliveryFee, resturant: this.restName, paymentMethod: this.paymentMethod.value, deliveryAddres: this.deliveryAddress, clientMobile: this.clientPhone }).subscribe(
      (res) => {
        this.router.navigateByUrl('/sent')
      },
      (err) => { console.log(err) }
    )

  }

}
