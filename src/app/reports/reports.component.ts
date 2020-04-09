import {Component, OnInit} from '@angular/core';
import {ReportsService} from '../reports.service';
import {Report} from '../models/report';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ReportsService]
})

export class ReportsComponent implements OnInit {
  reports: {}[] = [];

  constructor(private reportsService: ReportsService) {
  }


  findReports(pin?: string): void {
    if (pin) {
      this.reportsService.getReports(pin)
        .then(response => {
          this.reports = response;
        });
    }
  }

  ngOnInit(): void {

  }

}
