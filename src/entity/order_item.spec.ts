import OrderItem from "./order_item";

describe("OrderItem unit test", () => {
  it("should check if quantity is greater than zero", () => {
    expect(() => {
      new OrderItem("1", "Product 1", 2, 0, "123");
    }).toThrowError("Quantity must be greater than zero");
  });
});
