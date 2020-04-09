import {Injectable} from '@angular/core';
import * as api from './data-sources/data-base';
import {Report} from './models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  getReports(pin: string): Promise<any> {
    return api.fetchReports({pin});
  }
}
