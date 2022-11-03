import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() items:any

  constructor(private router:Router) { }

  ngOnInit(){
  }

  onClick(){
    this.router.navigate(['actors','detail',this.items.id])
  }

}
