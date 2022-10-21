import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit, AfterViewChecked {

  bttn = "";

  @Output() newItemEvent = new EventEmitter<any>();

  @ViewChild('priceInput') priceInput!:ElementRef;

  addNewItem(value:any) { 
    console.log(this.priceInput)   
    this.newItemEvent.emit({
      img: "https://images.unsplash.com/photo-1605812053762-0ea9454b1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
      title: value,
      des: this.priceInput.nativeElement.value
    })
    this.priceInput.nativeElement.value='';
  }



  constructor() { }

  ngOnInit(): void {
    this.bttn = "Add"
  }

  ngAfterViewInit(){
    console.log("viewinit")
  }

  ngAfterViewChecked(): void {
    
    console.log("viewchcked");
  }

 

}
