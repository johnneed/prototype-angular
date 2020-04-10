import {Injectable} from '@angular/core';
import * as api from './data-sources/data-base';
import {Report} from './models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  reports: Report[];
  selectedReportId: string;

  constructor() {
    this.reports = [];
    this.selectedReportId = null;
  }

  searchReports(pin: string): Promise<any> {
    return api.searchReports(pin)
  }

  selectReport(id: string) {
    this.selectedReportId = id;
  }

  getSelectedReport(){
    return this.reports.find(report => report.id === this.selectedReportId)
  }

  saveReport(report: Report):Promise<any> {
    return api.saveReport(report)
  }

  newReport():Promise<any>{
    return api.saveReport(new Report);
  }

}
