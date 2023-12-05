import ProductFactory from "./product.factory";
import { ProductTypes } from "./product.types";

describe("Product Facotry Unit Test", () => {
  it("should create product type a", () => {
    const product = ProductFactory.create(ProductTypes.Product, "Product A", 1);

    expect(product.id).toBeDefined();
    expect(product.name).toBe("Product A");
    expect(product.price).toBe(1);

    expect(product.constructor.name).toBe("Product");
  });
});
