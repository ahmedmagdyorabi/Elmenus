import { Component, DoCheck, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthnticationService } from 'src/app/Services/authntication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck {
  language: string;
  email:string;
  isLoading:boolean;
  error:String=null;
  userEmail:string='';
  isAuthnticated:boolean;

  constructor(private authService:AuthnticationService) { }
  ngDoCheck(): void {
    this.isAuthnticated= this.authService.islogged();
    this.email=localStorage.getItem('User');
    
  }

  ngOnInit(): void {
    this.language =localStorage.getItem('language') || 'en';
  
  }

  changeLanguage(language:string): void {
    localStorage.setItem("language",language);
    window.location.reload();


  }
  logOutForEmail(){
    this.authService.logout();
  
    // window.location.reload();
  }
  onClickLogin(userlogin:NgForm){
    const email=userlogin.value.email;
    const  password=userlogin.value.pwd;
    this.isLoading=true;
    this.authService.login(email,password).subscribe(resData=>{
      this.isLoading=false;
      this.error=null;
       this.userEmail=resData.email;

      //  window.location.reload();
      
    },
    err=>{console.log(err)
      this.isLoading=false;
      this.error=err.error.error.message;
    
    })
    userlogin.reset();
  
  
  }
  

}
