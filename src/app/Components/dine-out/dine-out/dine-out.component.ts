import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-dine-out',
  templateUrl: './dine-out.component.html',
  styleUrls: ['./dine-out.component.css']
})
export class DineOutComponent implements OnInit {
  restaurantName:string;

  constructor(private mySharedService:SharedService,private myRouter: Router) {    
  }

  ngOnInit(): void {
    this.restaurantName='';
  }
  navigateToRestaurantMatchesSearch():void{
    console.log(this.restaurantName)
    this.mySharedService.setValueSearched(this.restaurantName);
  
    this.myRouter.navigate(['/DineOut/RestaurantLocation/Cairo'])
}



}
