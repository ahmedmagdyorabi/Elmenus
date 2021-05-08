import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Iresturant } from 'src/app/ViewModels/iresturant';

@Component({
  selector: 'app-resturant-profile',
  templateUrl: './resturant-profile.component.html',
  styleUrls: ['./resturant-profile.component.css']
})
export class ResturantProfileComponent implements OnInit {
  @Input() restName: string;
  resturant: Iresturant = { name: '', Location: '', hotLine: 0, Branches: 0, Mood: 0, img: "", mealImg: '', id: 0 ,arName:''}
  aboutRest: boolean = false;
  restMenu: boolean = true;
  restBranches: boolean = false;
  restReviews: boolean = false;
  lang: string = localStorage.getItem("language")
  constructor(private restServ: ResturantDataService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        let restID = params.get('rid')
        console.log(restID)
        this.getResById(parseInt(restID))
      }
    )
  }

  getResById(rid: number) {

    return this.restServ.getRestById(rid).subscribe(
      (res) => {
        this.resturant = res
      },
      (err) => {
        console.log(err)
        // this.router.navigate(['/DineOut/RestaurantMood',moodDetails]);
      }
    )
  }

  showAbout(): boolean {
    return this.aboutRest = true, this.restMenu = false, this.restBranches = false, this.restReviews = false
  }

  showMenu(): boolean {
    return this.restMenu = true, this.aboutRest = false, this.restBranches = false, this.restReviews = false
  }

  showBranches(): boolean {
    return this.restBranches = true, this.aboutRest = false, this.restMenu = false, this.restReviews = false
  }

  showReviews(): boolean {
    return this.restReviews = true, this.restBranches = false, this.restBranches = false, this.aboutRest = false
  }

}
