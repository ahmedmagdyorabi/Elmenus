import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Idish } from 'src/app/ViewModels/idishe';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  dishesList:Idish[]=[];
  lang:string=localStorage.getItem("language");

  constructor(private restaurantsData:ResturantDataService,private myRouter: Router) { }

  ngOnInit(): void {
    this.restaurantsData.getDishesAvailable().subscribe(
     (response)=>{this.dishesList=response},
     (err)=>{console.log(err)}
       
    )
  }
  navigateToRestaurantsWithSameDishes(dish:Idish){
    this.myRouter.navigate(['/DineOut/RestaurantDish',dish.id])

  }

}
