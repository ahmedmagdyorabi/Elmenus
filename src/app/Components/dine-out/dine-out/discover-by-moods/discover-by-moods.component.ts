import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Imood } from 'src/app/ViewModels/imood';


@Component({
  selector: 'app-discover-by-moods',
  templateUrl: './discover-by-moods.component.html',
  styleUrls: ['./discover-by-moods.component.css','../dine-out.component.css']
})
export class DiscoverByMoodsComponent implements OnInit {
  moods: Imood[]=[];
  lang:string=localStorage.getItem("language");

  constructor(private router:Router,private avilableMoods:ResturantDataService) { }

  ngOnInit(): void {
    this.avilableMoods.getMoods().subscribe(
     (response)=>{
      this.moods = response
    



     },
     (err)=>{}



    )

  }
  restaurantByMood(moodDetails:string){
    this.router.navigate(['/DineOut/RestaurantMood',moodDetails]);



  
  }

}


