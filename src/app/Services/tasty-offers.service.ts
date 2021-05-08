import { Injectable } from '@angular/core';
import { Itasty } from '../ViewModels/itasty';

@Injectable({
  providedIn: 'root'
})
export class TastyOffersService {

  tastyOffersList: Itasty[] = []

  constructor() {
    this.tastyOffersList = [
      { img: "../../assets/Images/tastyoffer.jpg", item: "Burger", offer: true },
      { img: "../../assets/Images/tastyoffer.jpg", item: "Burger", offer: true },
      { img: "../../assets/Images/tastyoffer.jpg", item: "Burger", offer: true },
      { img: "../../assets/Images/tastyoffer.jpg", item: "Burger", offer: true },
      { img: "../../assets/Images/tastyoffer.jpg", item: "Burger", offer: true }
    ]
  }

  getAllOffers(): Itasty[] {
    return this.tastyOffersList
  }
}
