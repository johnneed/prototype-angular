import {ReportSubject} from './report-subject';
import {ReportVehicle} from './report-vehicle';

export class Report {

  public created?: Date;
  public dateTime?: Date;
  public id?: string;
  public officer?: string;
  public type?: string;
  public pin?: string;
  public updated?: Date;
  public vehicle: ReportVehicle;
  public subject: ReportSubject;
  public details?: string;

  constructor(args: Report = {vehicle: {}, subject: {}}) {
    this.created = Boolean(args.created)
      ? new Date(args.created)
      : new Date();
    this.dateTime = Boolean(args.dateTime)
      ? args.dateTime
      : new Date();
    this.id = typeof args.id === 'string'
      ? args.id
      : null;
    this.officer = typeof args.officer === 'string'
      ? args.officer
      : null;
    this.type = typeof args.type === 'string'
      ? args.type
      : null;
    this.pin = typeof args.pin === 'string'
      ? args.pin
      : null;
    this.updated = Boolean(args.updated)
      ? new Date(args.updated)
      : null;
    this.vehicle = new ReportVehicle(args.vehicle);
    this.subject = new ReportSubject(args.subject);
    this.details = args.details ? args.details : '';
  }
}
