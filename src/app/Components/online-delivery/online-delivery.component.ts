import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { SharedService } from 'src/app/Services/shared.service';
import { TastyOffersService } from 'src/app/Services/tasty-offers.service';
import { Iresturant } from 'src/app/ViewModels/iresturant';
import { Itasty } from 'src/app/ViewModels/itasty';

@Component({
  selector: 'app-online-delivery',
  templateUrl: './online-delivery.component.html',
  styleUrls: ['./online-delivery.component.css']
})
export class OnlineDeliveryComponent implements OnInit, OnChanges, OnDestroy, DoCheck {

  OffersList: Itasty[] = []
  restLit: Iresturant[];
  filteredRestList: Iresturant[];
  subscription: Subscription;
  subsList: Subscription[];
  itemsCount: number = 17;
  noMoreLoad: boolean = true;
  openNow: boolean = false;
  orderOnline: boolean = false;
  hyginCheck: boolean = false;
  promoCheck: boolean = false;
  restaurantName: string;
  lang: string = localStorage.getItem("language")


  constructor(private offers: TastyOffersService, private resDatea: ResturantDataService, private myRouter: Router, private mySharedService: SharedService) {

  }



  ngOnInit(): void {
    this.OffersList = this.offers.getAllOffers();
    this.restaurantName = '';

    this.subscription = this.resDatea.getAllRest().subscribe(
      (res) => {
        console.log(res)
        this.restLit = res;
      },
      (err) => { console.log(err) }

    )

  }

  ngDoCheck() {
    console.log(this.openNow)
    if (this.openNow) {
      this.filteredRestList = this.restLit.filter((rest) => {
        return rest.openNow === true
      })
      if (this.itemsCount > this.filteredRestList.length) {
        this.noMoreLoad = false
      }
    } else {
      this.filteredRestList = this.restLit
      this.noMoreLoad = true
    }

    console.log(this.filteredRestList)
  }

  viewMore(): number | boolean {
    if (this.itemsCount < this.restLit.length) {
      return this.itemsCount += 6
    } else {
      return this.noMoreLoad = false
    }

  }

  clearAll() {
    this.hyginCheck = false;
    this.openNow = false;
    this.orderOnline = false;
    this.promoCheck = false;
  }

  restProfile(rid: number) {
    this.myRouter.navigate(['/resturants', rid])
    return this.resDatea.getRestById(rid).subscribe(
      (res) => {
        let restDetalis: Iresturant = res;
      }
    )
  }



  ngOnChanges() {


  }


  ngOnDestroy() {

    // for (let sub of this.subsList) {
    //   sub.unsubscribe()
    // }

  }
  navigateToRestaurantMatchesSearch(): void {
    this.mySharedService.setValueSearched(this.restaurantName);
    // if(localStorage.getItem("language")==='ar')
    // this.myRouter.navigate(['/DineOut/RestaurantLocation/القاهرة'])
    // if(localStorage.getItem("language")==='en')
    this.myRouter.navigate(['/DineOut/RestaurantLocation/Cairo'])
}


}
