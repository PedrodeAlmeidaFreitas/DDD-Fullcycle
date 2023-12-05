import OrderItem from "./order_item";

export default interface OrderFactoryPropsInterface {
  id: string;
  customerId: string;
  items: OrderItem[];
}
