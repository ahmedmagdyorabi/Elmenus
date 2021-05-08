import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-change-address',
  templateUrl: './change-address.component.html',
  styleUrls: ['./change-address.component.css']
})
export class ChangeAddressComponent implements OnInit {
  addresForm: FormGroup = new FormGroup({})
  userEmail: string;

  constructor(private fb: FormBuilder, private uService: UserService) {
    this.userEmail = localStorage.getItem('User')
  }

  ngOnInit(): void {

    this.addresForm = this.fb.group({
      name: ['', Validators.required],
      addressInfo: ['', Validators.required],
      buildingNO: ['', Validators.required],
      floorNo: [''],
      apartmentNo: [''],
      mobile: ['', Validators.required],
      email: [this.userEmail]

    })
  }

  saveAddress() {
    console.log(this.addresForm.value)
    this.uService.addUser(this.addresForm.value).subscribe(
      (res) => {
        console.log(res)
        this.addresForm.reset()
      },
      (err) => {
        console.log(err)
      }
    )


  }

  cancel() {
    this.addresForm.reset()
  }

}
