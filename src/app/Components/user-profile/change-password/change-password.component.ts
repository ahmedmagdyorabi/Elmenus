import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/ViewModels/iusers';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  changePass: User
  confirmNewPass: string;
  oldPass: string
  // currentUserData:  User = { id: '', email: "" }
  // constructor(private user: UserService) {

  //   this.changePass = { id: '',  email: "mohamed@osama.com" }
  // }
  // ngOnChanges(changes: SimpleChanges): void {

  // }


  // ngOnInit(): void {
  //   this.user.getUserById(this.changePass.id).subscribe(
  //     (res) => {
  //       this.currentUserData = res
  //     },
  //     (err) => { console.log(err) }
  //   )
  // }

  // changePassword() {

  //   if (this.oldPass == this.currentUserData.password && this.changePass.password == this.confirmNewPass) {

  //     this.user.updateUserData(this.currentUserData.id, this.changePass).subscribe(
  //       (res) => {
  //         console.log(res)
  //       },
  //       (err) => { console.log(err) }
  //     )
  //   } else {
  //     alert('something went wrong')
  //   }
  //   this.oldPass = "", this.confirmNewPass = "", this.changePass.password = ""
  // }

}
