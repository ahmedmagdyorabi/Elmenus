import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/Services/orders.service';
import { SharedService } from 'src/app/Services/shared.service';
import { IcompletedOrder } from 'src/app/ViewModels/icompleted-order';
import { Iorder } from 'src/app/ViewModels/iorder';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

  myOrderList: IcompletedOrder[] = []
  email: string;
  order: Iorder[] = []

  constructor(private orderService: OrdersService, private shService: SharedService, private router: Router) {
    this.email = localStorage.getItem("User")
  }


  ngOnInit(): void {
    console.log(this.email)
    this.orderService.getOrdersByUserEmail(this.email).subscribe(
      (res) => {
        console.log(res)
        this.myOrderList = res
        console.log(this.myOrderList)
      },
      (err) => {
        console.log(err)
      }
    )

    // console.log(this.myOrderList)

  }

  orderAgain(i: number) {
    this.shService.setOrderList(this.myOrderList[i].order)
    this.router.navigateByUrl('/check-out')
  }


}
