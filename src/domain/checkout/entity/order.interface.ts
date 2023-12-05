import OrderItemInterface from "./order_item.interface";

export default interface OrderInterface {
  get id(): string;
  get customerId(): string;
  get total(): number;
  get items(): OrderItemInterface[];
}
