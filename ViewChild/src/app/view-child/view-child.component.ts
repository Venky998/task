import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {


    givenName: string;
    givenPlace: string;
  constructor() {
   }
   @ViewChild('abc') name: ElementRef;
   @ViewChild('xyz') place: ElementRef;

  ngOnInit(): void {
  }

  getDetails() {
    this.givenName = this.name.nativeElement.value;
    this.givenPlace = this.place.nativeElement.value;
  }

}
