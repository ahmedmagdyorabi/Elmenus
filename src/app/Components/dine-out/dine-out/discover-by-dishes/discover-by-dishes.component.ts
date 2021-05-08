import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Idish } from 'src/app/ViewModels/idishe';


@Component({
  selector: 'app-discover-by-dishes',
  templateUrl: './discover-by-dishes.component.html',
  styleUrls: ['./discover-by-dishes.component.css']
})
export class DiscoverByDishesComponent implements OnInit {
  dishes:Idish[]=[];
  lang:string=localStorage.getItem("language")
  constructor(private router: Router,private allDishes:ResturantDataService) { }

  ngOnInit(): void {
this.allDishes.getDishesAvailable().subscribe(
  (response)=>{
    console.log(response)
    this.dishes=response
  },
  (err)=>{}



)



  }
  getRestaurantByDishes(dish:string){
    console.log(dish)

    this.router.navigate(['/DineOut/RestaurantDish',dish]);
  }

}
