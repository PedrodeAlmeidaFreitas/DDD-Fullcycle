import { v4 as uuid } from "uuid";
import OrderFactoryPropsInterface from "../entity/order-factory-props.interface";
import OrderItem from "../entity/order_item";
import OrderFactory from "./order.factory";

describe("Order factory unit test", () => {
  it("Should create a order", () => {
    const orderProps: OrderFactoryPropsInterface = {
      id: uuid(),
      customerId: uuid(),
      items: [new OrderItem(uuid(), "Product 1", 1, 1, uuid())],
    };
    const order = OrderFactory.create(orderProps);

    expect(order.id).toBe(orderProps.id);
    expect(order.customerId).toBe(orderProps.customerId);
    expect(order.items).toBe(orderProps.items);
    expect(order.items.length).toBe(orderProps.items.length);
  });
});
