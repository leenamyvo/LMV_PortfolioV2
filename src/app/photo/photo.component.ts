import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // footer year auto-update
  currentyear: number = new Date().getFullYear();

}
