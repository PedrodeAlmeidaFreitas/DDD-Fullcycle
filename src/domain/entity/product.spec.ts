import Product from "./product";

describe("Product unit test", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Product("", "Product 1", 100);
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new Product("123", "", 100);
    }).toThrowError("Name is required");
  });

  it("should throw error when price is empty", () => {
    expect(() => {
      new Product("123", "Product 1", -1);
    }).toThrowError("Price should be greater or equal to zero");
  });

  it("should change name", () => {
    const product = new Product("123", "Product 1", 10);

    product.changeName("Product 2");
    expect(product.name).toBe("Product 2");
  });

  it("should change price", () => {
    const product = new Product("123", "Product 1", 10);

    product.changePrice(20);
    expect(product.price).toBe(20);
  });
});
