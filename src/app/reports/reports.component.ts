import {Component, OnInit} from '@angular/core';
import {ReportsService} from '../reports.service';
import {Report} from '../models/report';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ReportsService]
})

export class ReportsComponent implements OnInit {
  reports: Report[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportsService: ReportsService) {
    this.reports = [];
  }


  findReports(pin?: string): void {
    if (pin) {
      this.reportsService.searchReports(pin).then(
        response => {
          this.reports = response;
        });
    }
  }

  ngOnInit(): void {

  }

}
