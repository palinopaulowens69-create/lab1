import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- 1. Add this line
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton, 
} from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,   
    RouterLink,  
  ],
})
export class HomePage {
  constructor() {}
}