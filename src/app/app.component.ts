import {Component} from '@angular/core';
import {ReportsService} from "./reports.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prototype-angular';
  searchOpened: boolean;
  navOpened: boolean;

  constructor(private reportsService: ReportsService, private router: Router){
    this.searchOpened = false;
    this.navOpened = false;
  }

  toggleSearch() {
    this.searchOpened = !this.searchOpened;
  }

  toggleNav() {
    this.navOpened = !this.navOpened;
  }

  newReport() {
    this.reportsService.newReport().then(reportId => {
      this.router.navigate([`/reports/${reportId}`], {queryParams: {order: 'popular'}});
    })
  }

}
