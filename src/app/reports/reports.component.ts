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
  reports: Report[];

  constructor(private reportsService: ReportsService) {
    this.reports = [];
  }


  findReports(pin?: string): void {
    if (pin) {
      this.reportsService.searchReports(pin).then(response => {
        this.reports = response;
      });
    }
  }

  ngOnInit(): void {

  }

}
