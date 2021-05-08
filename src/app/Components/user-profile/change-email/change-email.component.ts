import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/ViewModels/iusers';


@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit, OnChanges {

  chnageemail:  User;
  constructor(private user: UserService) {
    // this.chnageemail = { id: 1, name: "Mohamed", password: "123456789", email: "" }
  }
  ngOnChanges(changes: SimpleChanges): void {
    // this.user.getUserById(this.chnageemail.id).subscribe(
    //   (res) => {
    //     this.chnageemail = res
    //   },
    //   (err) => { console.log(err) }
    // )
  }

  ngOnInit(): void {

  }

  // changeEmail() {
  //   this.user.updateUserData(this.chnageemail.id, this.chnageemail).subscribe(
  //     (res) => {
  //       console.log(res)
  //     },
  //     (err) => {
  //       console.log(err)
  //     }
  //   )
  //   this.chnageemail.email = ""
  // }

}
