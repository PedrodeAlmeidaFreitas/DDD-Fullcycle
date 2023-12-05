import Order from "../entity/order";
import OrderFactoryPropsInterface from "../entity/order-factory-props.interface";
import OrderInterface from "../entity/order.interface";

export default class OrderFactory {
  static create(props: OrderFactoryPropsInterface): OrderInterface {
    return new Order(props.id, props.customerId, props.items);
  }
}
