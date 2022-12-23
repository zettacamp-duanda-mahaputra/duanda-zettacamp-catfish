import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { HomepageService } from "./homepage.service"
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  message: any = null;
  constructor(private HomepageService: HomepageService) { }

  ngOnInit(): void {
    this.requestPermission();
    this.listen();
  }

  requestPermission() {

    const messaging = getMessaging();

    getToken(messaging, { vapidKey: environment.firebase.vapidKey }).then((currentToken) => {
      if (currentToken) {
        console.log(currentToken);
        this.HomepageService.saveTokenFCM(currentToken).subscribe((data: any) => {
          console.log(data);
        })
      } else {
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });

  }

  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message=payload;
    });
  }
}
