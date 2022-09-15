import { Component, Input, OnInit } from '@angular/core';

// manually added imported components below
import { DragScrollComponent } from 'ngx-drag-scroll';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-home', /*changed from app-root*/
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  /* ngx-drag-scroll carousel - change defualt values as desired */
  // @Input() scrollbar-hidden = 'true';

  constructor() {}

  ngOnInit() {}

  /* ngx-drag-scroll carousel nav buttons*/
  @ViewChild('navbuttons', {read: DragScrollComponent, static: true}) ds!: DragScrollComponent;
  moveLeft() {
    this.ds.moveLeft();
  }
  moveRight() {
    this.ds.moveRight();
  }
  moveTo(index: any) {
    this.ds.moveTo(index);
  }
  ngAfterViewInit() {
    // Starting ngx-drag-scroll from specified index(0)
    setTimeout(() => {
      this.ds.moveTo(0);
    }, 0);
  }


}
