import { v4 as uuid } from "uuid";
import Product from "../entity/product";
import ProductInterface from "../entity/product.interface";
import { ProductTypes } from "./product.types";

export default class ProductFactory {
  static create(
    type: ProductTypes,
    name: string,
    price: number
  ): ProductInterface {
    switch (type) {
      case ProductTypes.Product:
        return new Product(uuid(), name, price);
      default:
        throw new Error("Product type not supported");
    }
  }
}
