import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  deliverTo: number[] = [1, 2, 3, 4]
  deliverRow: number[] = [1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

}
