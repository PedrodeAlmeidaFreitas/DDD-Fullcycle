export default class Address {
  private _street: string = "";
  private _number: number = 0;
  private _zip: string = "";
  private _city: string = "";
  private _country: string = "";

  constructor(
    street: string,
    number: number,
    zip: string,
    city: string,
    country: string
  ) {
    this._street = street;
    this._number = number;
    this._zip = zip;
    this._city = city;
    this._country = country;
    this.validate();
  }

  validate() {}
}
