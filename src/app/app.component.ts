import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthnticationService } from './Services/authntication.service';
import { ResturantDataService } from './Services/resturant-data.service';
import { SharedService } from './Services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';
  restaurantName: string;
  subscription: Subscription;
  isLoading:boolean;
  error:String=null;
  isAuthnticated:boolean;
  userEmail:string='';
  @ViewChild("parent") private parentRef: ElementRef<HTMLElement>;
  

constructor(private mySharedService:SharedService,private router:Router,private resDatea: ResturantDataService,private authService :AuthnticationService) {
   
    

  }
  ngDoCheck():void{
    
    
    
    this.isAuthnticated= this.authService.islogged();
  }

  ngOnInit(): void {
    
    this.restaurantName='';
   

     
  }
  ngAfterViewInit(){
if(localStorage.getItem("language")==='ar')
    this.parentRef.nativeElement.dir='rtl';
    if(localStorage.getItem("language")==='en')
    this.parentRef.nativeElement.dir='ltr';

    

  }
  navigateToRestaurantMatchesSearch():void{
   
    this.mySharedService.setValueSearched(this.restaurantName);
    if(localStorage.getItem("language")==='ar')
    this.router.navigate(['/DineOut/RestaurantLocation/القاهرة'])
    if(localStorage.getItem("language")==='en')
    this.router.navigate(['/DineOut/RestaurantLocation/Cairo'])
}
  
onSubmit(form:NgForm){
  const email=form.value.email;
  const  password=form.value.pwd;
  this.isLoading=true;
  this.authService.signUp(email,password).subscribe(
    
    resData=>{
      console.log(resData.email)
      this.isLoading=false;
      this.error=null;
    
    },
    err=>{console.log(err)
      this.isLoading=false;
      this.error=err.error.error.message;
    
    })


  form.reset();

}



onClickLogin(userlogin:NgForm){
  const email=userlogin.value.email;
  const  password=userlogin.value.pwd;
  this.isLoading=true;
  this.authService.login(email,password).subscribe(resData=>{
    this.isLoading=false;
    this.error=null;
     this.userEmail=resData.email;
  },
  err=>{console.log(err)
    this.isLoading=false;
    this.error=err.error.error.message;
  
  })
  userlogin.reset();


}
logOutForEmail(){
  this.authService.logout();

}
}
