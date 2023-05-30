import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit test", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      let order = new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw error when custumerid is empty", () => {
    expect(() => {
      let order = new Order("123", "", []);
    }).toThrowError("CustumerId is required");
  });

  it("should throw error when items is empty", () => {
    expect(() => {
      new Order("123", "123", []);
    }).toThrowError("Items quantity must be greater than zero");
  });

  it("should calculate total", () => {
    const item = new OrderItem("1", "Product 1", 2, 1, "123");
    const item2 = new OrderItem("1", "Product 2", 2.75, 2, "1234");
    const order = new Order("123", "123", [item]);

    expect(order.total).toBe(2);
    const order2 = new Order("123", "123", [item, item2]);
    expect(order2.total).toBe(7.5);
  });
});
