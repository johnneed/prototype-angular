import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prototype-angular';
  searchOpened: boolean;
  navOpened: boolean;

  constructor() {
    this.searchOpened = false;
    this.navOpened = false;
  }

  toggleSearch() {
    this.searchOpened = !this.searchOpened;
  }

  toggleNav() {
    this.navOpened = !this.navOpened;
  }

}
