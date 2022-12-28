import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // footer year auto-update
  currentyear: number = new Date().getFullYear();

}
