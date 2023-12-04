import Product from "../entity/product";
import ProductService from "./product.service";

describe("Product service unit tests", () => {
  it("Should change the prices of all products", () => {
    const prod1 = new Product("1", "Product 1", 10);
    const prod2 = new Product("2", "Product 1", 20);
    const products = [prod1, prod2];

    ProductService.increasePrice(products, 100);

    expect(prod1.price).toBe(20);
    expect(prod2.price).toBe(40);
  });
});
