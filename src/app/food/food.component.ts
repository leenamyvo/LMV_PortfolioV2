import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // footer year auto-update
  currentyear: number = new Date().getFullYear();

}
