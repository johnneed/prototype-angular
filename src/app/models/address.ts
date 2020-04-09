export class Address {
  public street?: string;
  public street2?: string;
  public aptNo?: string;
  public city?: string;
  public stateProvince?: string;
  public country?: string;
  public postalCode?: string;

  constructor(args: Address = {}) {
    this.city = (args || {}).city || '';
    this.stateProvince = (args || {}).stateProvince || '';
    this.street = (args || {}).street || '';
    this.street2 = (args || {}).street2 || '';
    this.aptNo = (args || {}).aptNo || '';
    this.postalCode = (args || {}).postalCode || '';
    this.country = (args || {}).country || 'USA';
  }
}
