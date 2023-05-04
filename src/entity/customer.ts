import Address from "./address";

export default class Customer {
  private _id: string;
  private _name: string;
  private _address?: Address;
  private _active = false;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
    this.validate();
  }

  get name(): string {
    return this._name;
  }

  get active(): boolean {
    return this._active;
  }

  validate() {
    if (this._name.length === 0) {
      throw new Error("Name is mandatory to activate a customer");
    }
    if (this._id.length === 0) {
      throw new Error("Id is mandatory to activate a customer");
    }
  }

  changeName(newName: string) {
    this._name = newName;
    this.validate();
  }

  activate() {
    if (this._address === undefined) {
      throw new Error("Address is mandatory to activate a customer");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  set Address(address: Address) {
    this._address = address;
  }
}
