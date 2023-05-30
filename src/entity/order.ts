import OrderItem from "./order_item";

export default class Order {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[] = [];
  private _total: number;

  get total(): number {
    return this._total;
  }

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.totalItems();
    this.validate();
  }

  validate(): void {
    if (this._id.length === 0) {
      throw new Error("Id is required");
    }

    if (this._customerId.length === 0) {
      throw new Error("CustumerId is required");
    }

    if (this._items.length === 0) {
      throw new Error("Items quantity must be greater than zero");
    }
  }

  private totalItems(): number {
    return this._items.reduce((acc, item) => acc + item.orderItemTotal(), 0);
  }
}
