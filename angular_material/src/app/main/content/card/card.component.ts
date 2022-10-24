import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  


  constructor() { }

  @Output() Likes:EventEmitter<any> = new EventEmitter();
  @Input() index:any;
  @Input() LISTED:any;

  ngOnInit(): void {
  }

  onClick(){
    this.Likes.emit({
      index: this.index,
      liked: !this.LISTED.liked
    })
    console.log(this.index);
    
  }

}
