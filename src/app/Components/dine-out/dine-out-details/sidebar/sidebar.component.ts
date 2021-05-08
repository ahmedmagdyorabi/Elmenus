import { Component, OnInit } from '@angular/core';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Idish } from 'src/app/ViewModels/idishe';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  dishesList:Idish[]=[];

  constructor(private allDishes:ResturantDataService) {

   }

  ngOnInit(): void {


    this.allDishes.getDishesAvailable().subscribe(
      (response)=>{

        this.dishesList=response
      },
      (err)=>{}
      
      
      
      )
  }



}
