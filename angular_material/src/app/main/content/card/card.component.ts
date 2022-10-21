import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class CardComponent implements OnInit, OnChanges {

  active:boolean = false;
  @Input() items:any

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log("added new card")
  }



  onClick(){
    this.active = !this.active
  }



}
