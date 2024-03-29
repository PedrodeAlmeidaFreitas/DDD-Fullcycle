import OrderInterface from "./order.interface";
import OrderItem from "./order_item";
import OrderItemInterface from "./order_item.interface";

export default class Order implements OrderInterface {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[] = [];
  private _total: number;

  get id(): string {
    return this._id;
  }

  get customerId(): string {
    return this._customerId;
  }

  get total(): number {
    return this._total;
  }

  get items(): OrderItemInterface[] {
    return this._items;
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

  changeItems(items: OrderItem[]): void {
    this._items = items;
    this._total = this.totalItems();
    this.validate();
  }

  private totalItems(): number {
    return this._items.reduce((acc, item) => acc + item.orderItemTotal(), 0);
  }
}
