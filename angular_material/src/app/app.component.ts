import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular_material';
  menus:any = []

  ngOnInit(){
    let userData:any = localStorage.getItem('userData')
    userData = JSON.parse(userData)
    this.menus = userData.filter((val:any)=> val.view === true)

  }
}
