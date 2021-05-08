import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { SharedService } from 'src/app/Services/shared.service';
import { Iresturant } from 'src/app/ViewModels/iresturant';
@Component({
  selector: 'app-discover-by-category',
  templateUrl: './discover-by-category.component.html',
  styleUrls: ['./discover-by-category.component.css'],
})
export class DiscoverByCategoryComponent implements OnInit {
  restaurantList: Iresturant[] = [];
  restaurant:any;  
  lang:string=localStorage.getItem("language")
  constructor(
    private activatedRouter: ActivatedRoute,
    private restaurants: ResturantDataService,
    private router: Router,
    private sharedService: SharedService
  ) {


    this.restaurant=this.sharedService.getValueSearched();
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params: ParamMap) => {
      let sortByRestaurantMood = this.activatedRouter.snapshot.paramMap.get(
        'Mood'
      );
      let sortByRestaurantDish = this.activatedRouter.snapshot.paramMap.get(
        'Dish'
      );
      let sortByRestaurantLocation = this.activatedRouter.snapshot.paramMap.get(
        'Location'
      );

      
      if (sortByRestaurantMood) {
        this.restaurants.getRestaurantsByMoods(sortByRestaurantMood).subscribe(
          (response) => {
            this.restaurantList = response;
            
          },
          (err) => {
            console.log(err);
          }
        );
      }
      if (sortByRestaurantDish) {
        this.restaurants.getRestaurantByDishs(sortByRestaurantDish).subscribe(
          (response) => {
            this.restaurantList = response;
            console.log(this.restaurantList);
          },
          (err) => {
            console.log(err);
          }
        );
      }
      if (sortByRestaurantLocation) {   
        console.log(sortByRestaurantLocation)
        console.log(this.restaurant)
        this.restaurants
          .getRestaurantByLocation(sortByRestaurantLocation)
          .subscribe(
            (response) => {  
              console.log(response)
              if(this.restaurant.length>0 ){ 
                this.restaurantList=response.filter((rest)=>{
                  if(localStorage.getItem("language")=='en'){
                  return (
                    rest.name.toLowerCase().includes(this.restaurant)
                    
                    )
                  }
                  else{       return (
                    rest.arName.toLowerCase().includes(this.restaurant)
                    
                    )}
                });

              }
              
              else{this.restaurantList=response}
             
            },
            (err) => {
              console.log(err);
            }

           
          );
         
      }
    });
  }
  navigateToRestaurant(restaurant: Iresturant) {
    this.router.navigate(['/resturants', restaurant.id]);
  }
}
