import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Iresturant } from 'src/app/ViewModels/iresturant';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit, OnChanges {

  @Input() restID: number;
  resturant: Iresturant = { id: 0, name: '', Location: '', hotLine: 0, Branches: 0, img: "", mealImg: "" ,arName:''}
  repeat: number[] = [1, 2, 3, 4, 5, 6, 7]

  constructor(private restData: ResturantDataService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.restID)
    this.restData.getRestById(this.restID).subscribe(
      (res) => {
        console.log(res)
        this.resturant = res
      },
      (err) => {
        console.log(err)
      }
    )

  }

  ngOnInit(): void {


  }



}
