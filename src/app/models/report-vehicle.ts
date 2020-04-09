export class ReportVehicle {

  public created?: Date;
  public licensePlateNumber?: string;
  public id?: string;
  public licensePlateState?: string;
  public licensePlateCountry?: string;
  public updated?: Date;
  public vehicleModel?: string;
  public vehicleYear?: string;
  public vehicleMake?: string;
  public vehicleColor?: string;
  public vin?: string;

  constructor(args: ReportVehicle = {}) {
    this.created = Boolean(args.created)
      ? new Date(args.created)
      : new Date();
    this.id = typeof args.id === 'string'
      ? args.id
      : null;
    this.vehicleMake = typeof args.vehicleMake === 'string'
      ? args.vehicleMake
      : null;
    this.vehicleModel = typeof args.vehicleModel === 'string'
      ? args.vehicleModel
      : null;
    this.vehicleYear = typeof args.vehicleYear === 'string'
      ? args.vehicleYear
      : null;
    this.vehicleColor = typeof args.vehicleColor === 'string'
      ? args.vehicleColor
      : null;
    this.licensePlateNumber = typeof args.licensePlateNumber === 'string'
      ? args.licensePlateNumber
      : null;
    this.licensePlateState = typeof args.licensePlateState === 'string'
      ? args.licensePlateState
      : null;
    this.licensePlateCountry = typeof args.licensePlateCountry === 'string'
      ? args.licensePlateCountry
      : 'USA';
    this.updated = Boolean(args.updated)
      ? new Date(args.updated)
      : null;
    this.vin = typeof args.vin === 'string'
      ? args.vin
      : null;
  }
}
