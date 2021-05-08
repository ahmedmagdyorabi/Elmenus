import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { SharedService } from 'src/app/Services/shared.service';
import { Imenu } from 'src/app/ViewModels/imenu';
import { Iorder } from 'src/app/ViewModels/iorder';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, DoCheck {
  @Input() restName: string
  menu: Imenu[] = []

  localstorageCheck: boolean;

  order: Iorder[] = []

  constructor(private restData: ResturantDataService, private shService: SharedService, private router: Router) { }
  ngDoCheck(): void {

    this.shService.setOrderList(this.order)
  }

  ngOnInit(): void {

    this.restData.getMenu().subscribe(
      (res) => {
        console.log(res)
        this.menu = res
      },
      (err) => {
        console.log(err)
      }
    )


  }

  addToCart(mealName: string, mealPrice: number) {
    if (localStorage.getItem('authUser')) {
      this.order.push({ meal: mealName, price: mealPrice, quantity: 1 })
    } else {
      alert('Please Login First')
    }
  }

  checkOut() {
    this.shService.setResturantName(this.restName)
    if (localStorage.getItem('authUser')) {
      this.router.navigateByUrl('/check-out')
    } else {
      alert('Please Login First')
    }

  }

}
