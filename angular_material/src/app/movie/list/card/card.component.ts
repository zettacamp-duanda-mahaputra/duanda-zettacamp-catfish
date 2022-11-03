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

  ngOnInit(): void {
  }

  onClick(){
    console.log("tets");
    
    this.router.navigate(['movie','detail',this.items.id])
  }

}
