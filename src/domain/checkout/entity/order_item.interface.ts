export default interface OrderItemInterface {
  id: string;
  productId: string;
  name: string;
  quantity: number;
  price: number;
  orderItemTotal?(): number;
}
