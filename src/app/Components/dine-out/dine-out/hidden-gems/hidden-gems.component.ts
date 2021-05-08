import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Iresturant } from 'src/app/ViewModels/iresturant';


@Component({
  selector: 'app-hidden-gems',
  templateUrl: './hidden-gems.component.html',
  styleUrls: ['./hidden-gems.component.css']
})
export class HiddenGemsComponent implements OnInit {
  hiddenGemsRestaurants:Iresturant[]=[];
  lang:string;

  constructor( private router:Router,private hiddenGemsRestaurantsService:ResturantDataService) { }

  ngOnInit(): void {
    this.lang=localStorage.getItem('language');
    // this.hiddenGemsRestaurantsService.getHiddenGemsRestaurants().subscribe(
    //     (response)=>{
    //      this.hiddenGemsRestaurants=response;
    //      console.log(response)
    //     },
    //     (error)=>{
    //       console.log(error)
    //     }


    // )

     


  }
  getRestaurantsByHiddGems(mood:string){
    this.router.navigate(['/DineOut/RestaurantMood',mood]);




  }
  navigateToRestaurant(restaurant:Iresturant){

    this.router.navigate(['/resturants',restaurant.id])
  }

}
