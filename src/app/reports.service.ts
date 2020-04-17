import {Injectable} from '@angular/core';
import * as api from './data-sources/data-base';
import {Report} from './models/report';
import {ReportVehicle} from './models/report-vehicle';
import {ReportSubject} from './models/report-subject';
import {reports} from './data-sources/fake-data';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  reports: Report[];
  selectedReportId: string;

  constructor() {
    this.reports = reports;
    this.selectedReportId = null;
  }

  searchReports(pin: string): Promise<any> {
    return api.searchReports(pin);
  }

  selectReport(id: string) {
    this.selectedReportId = id;
    const selected =  this.reports.find(report => report.id === this.selectedReportId);
    return selected;
  }

  getSelectedReport() {
    return this.reports.find(report => report.id === this.selectedReportId);
  }

  saveReport(report: Report): Promise<any> {
    return api.saveReport(report);
  }

  newReport(): Promise<any> {
    return api.saveReport(new Report);
  }

  updateVehicle(vehicle: ReportVehicle) {
    const report = this.reports.find(report => report.id === this.selectedReportId);
    if (report) {
      report.vehicle = vehicle;
    }
  }

  updateSubject(subject: ReportSubject) {
    const report = this.reports.find(report => report.id === this.selectedReportId);
    if (report) {
      report.subject = subject;
    }
  }

}
