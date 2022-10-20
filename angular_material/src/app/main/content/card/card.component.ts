import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class CardComponent implements OnInit {

  active:boolean = false;
  @Input() items:any

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.active = !this.active
  }

}
