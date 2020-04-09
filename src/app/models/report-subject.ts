import {Address} from './address';

export class ReportSubject {
  public created?: Date;
  public email?: string;
  public id?: string;
  public lastName?: string;
  public firstName?: string;
  public phoneNumber?: string;
  public address?: Address;
  public updated?: Date;
  public gender?: string;
  public driversLicenseNumber?: string;
  public driversLicenseState?: string;
  public driversLicenseExpiration?: Date;

  constructor(args: ReportSubject = {}) {
    this.created = Boolean(args.created)
      ? new Date(args.created)
      : new Date();
    this.email = args.email;
    this.id = typeof args.id === 'string'
      ? args.id
      : null;
    this.firstName = typeof args.firstName === 'string'
      ? args.firstName
      : null;
    this.lastName = typeof args.lastName === 'string'
      ? args.lastName
      : null;
    this.phoneNumber = args.phoneNumber;
    this.address = new Address(args.address || {});
    this.updated = Boolean(args.updated)
      ? new Date(args.updated)
      : null;
    this.gender = typeof args.gender === 'string'
      ? args.gender
      : null;
    this.created = Boolean(args.created)
      ? new Date(args.created)
      : new Date();
    this.driversLicenseNumber = args.driversLicenseNumber || '';
    this.driversLicenseState = args.driversLicenseState || '';
    this.driversLicenseExpiration = Boolean(args.driversLicenseExpiration) ? new Date(args.driversLicenseExpiration) : null;
  }
}
