import Customer from "../entity/customer";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";

describe("Order service Unit Test", () => {
  it("Should get total of all orders", () => {
    const orderItem1 = new OrderItem("1", "1", 10, 1, "1");
    const orderItem2 = new OrderItem("2", "2", 20, 2, "2");

    const order1 = new Order("1", "1", [orderItem1]);
    const order2 = new Order("2", "2", [orderItem2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toBe(50);
  });

  it("Should place an order", () => {
    const customer = new Customer("c1", "Customer 1");

    const orderItem1 = new OrderItem("1", "Item 1", 10, 1, "1");

    const order = OrderService.placeOrder(customer, [orderItem1]);

    expect(customer.rewardPoints).toBe(5);
    expect(order.total).toBe(10);
  });
});
