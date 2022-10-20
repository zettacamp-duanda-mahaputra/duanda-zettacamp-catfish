import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<any>();

  addNewItem(value: any) {
    this.newItemEvent.emit({
      img: "https://images.unsplash.com/photo-1605812053762-0ea9454b1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
      title: value,
      des: "Rp 700.000.000"
    });
  }



  constructor() { }

  ngOnInit(): void {
  }

}
