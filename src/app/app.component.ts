import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'inicio', url: 'home', icon: 'home' },
    { title: 'customers', url: 'customers', icon: 'add' },
    { title: 'programar viaje ', url: '/folder/programar viaje', icon: 'hourglass' },
    { title: 'misViajes', url: '/folder/misViajes', icon: 'calendar' },
    { title: 'cuenta', url: '/folder/cuenta', icon: 'person' },
  
  ];
  // public labels = [];
  constructor() {}
}
