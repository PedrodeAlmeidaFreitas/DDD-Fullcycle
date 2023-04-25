import Address from "./address";

export default class Customer {
  _id: string;
  _name: string;
  _address?: Address;
  _activate = false;

  constructor(id: string, name: string, address: Address) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  validate() {}

  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this._activate = true;
  }

  deactivate() {
    this._activate = false;
  }

  set Address(address: Address) {
    this._address = address;
  }
}
