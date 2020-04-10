import {Component, OnInit} from '@angular/core';
import {ReportsService} from "../reports.service";
import {Report} from "../models/report";
import {states} from "../data-sources/us-states";
import {Router} from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {

  report: Report;
  genders: string[] = ['Male', 'Female', 'Other'];
  states: {}[];

  constructor(private reportsService: ReportsService,  private route: ActivatedRoute) {
    this.states = states;
    this.report = new Report;
  }


  ngOnInit(): void {
    const reportId = this.route.snapshot.paramMap.get("id");
    this.reportsService.selectReport(reportId);
    this.report = this.reportsService.getSelectedReport() || new Report;
  }

}
