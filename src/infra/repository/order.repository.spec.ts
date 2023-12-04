import { Sequelize } from "sequelize-typescript";
import Order from "../../domain/checkout/entity/order";
import OrderItem from "../../domain/checkout/entity/order_item";
import Customer from "../../domain/customer/entity/customer";
import Address from "../../domain/customer/value-object/address";
import Product from "../../domain/product/entity/product";
import CustomerModel from "../db/sequelize/model/customer.model";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";
import ProductModel from "../db/sequelize/model/product.model";
import CustomerRepository from "./customer.repository";
import OrderRepository from "./order.repository";
import ProductRepository from "./product.repository";
import SequelizeTestConfig from "./sequilize-test.config";

describe("Order repository test", () => {
  let sequelize: Sequelize;
  let orderRepository: OrderRepository;
  let customerRepository: CustomerRepository;
  let productRepository: ProductRepository;

  beforeEach(async () => {
    sequelize = SequelizeTestConfig.config();
    orderRepository = new OrderRepository();
    customerRepository = new CustomerRepository();
    productRepository = new ProductRepository();

    sequelize.addModels([
      CustomerModel,
      OrderModel,
      OrderItemModel,
      ProductModel,
    ]);
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a new order", async () => {
    const customer = new Customer("123", "Customer 1");
    const address = new Address(
      "Street 1",
      1,
      "Zipcode 1",
      "City 1",
      "Country 1"
    );
    customer.changeAddress(address);

    await customerRepository.create(customer);

    const product = new Product("1", "Product 1", 10);
    await productRepository.create(product);

    const orderItem = new OrderItem(
      "1",
      product.name,
      product.price,
      2,
      product.id
    );
    const order = new Order("1", customer.id, [orderItem]);
    await orderRepository.create(order);

    const orderModel = await orderRepository.find(order.id);

    expect(JSON.stringify(orderModel)).toStrictEqual(JSON.stringify(order));
  });

  it("should update a new order", async () => {
    const customer = new Customer("123", "Customer 1");
    const address = new Address(
      "Street 1",
      1,
      "Zipcode 1",
      "City 1",
      "Country 1"
    );
    customer.changeAddress(address);

    await customerRepository.create(customer);

    const product = new Product("1", "Product 1", 10);
    await productRepository.create(product);

    const orderItem = new OrderItem(
      "1",
      product.name,
      product.price,
      2,
      product.id
    );
    const order = new Order("1", customer.id, [orderItem]);
    await orderRepository.create(order);

    const orderModel = await orderRepository.find(order.id);

    expect(JSON.stringify(orderModel)).toStrictEqual(JSON.stringify(order));

    orderItem.increaseQuantity(5);

    order.changeItems([orderItem]);

    await orderRepository.update(order);

    const updatedOrderModel = await orderRepository.find(order.id);

    expect(JSON.stringify(updatedOrderModel)).toStrictEqual(
      JSON.stringify(order)
    );
  });

  it("should delete an order", async () => {
    const customer = new Customer("123", "Customer 1");
    const address = new Address(
      "Street 1",
      1,
      "Zipcode 1",
      "City 1",
      "Country 1"
    );
    customer.changeAddress(address);

    await customerRepository.create(customer);

    const product = new Product("1", "Product 1", 10);
    await productRepository.create(product);

    const orderItem = new OrderItem(
      "1",
      product.name,
      product.price,
      2,
      product.id
    );
    const order = new Order("1", customer.id, [orderItem]);
    await orderRepository.create(order);

    const orderModel = await orderRepository.find(order.id);

    expect(JSON.stringify(orderModel)).toStrictEqual(JSON.stringify(order));

    await orderRepository.delete(order.id);

    const updatedOrderModel = await orderRepository.find(order.id);

    expect(JSON.stringify(updatedOrderModel)).toBeUndefined();
  });

  it("should find all orders", async () => {
    const customer = new Customer("123", "Customer 1");
    const address = new Address(
      "Street 1",
      1,
      "Zipcode 1",
      "City 1",
      "Country 1"
    );
    customer.changeAddress(address);

    await customerRepository.create(customer);

    const product = new Product("1", "Product 1", 10);
    await productRepository.create(product);

    const orderItem = new OrderItem(
      "1",
      product.name,
      product.price,
      2,
      product.id
    );
    const order = new Order("1", customer.id, [orderItem]);
    await orderRepository.create(order);

    //Order 2
    const customer2 = new Customer("456", "Customer 2");
    const address2 = new Address(
      "Street 2",
      2,
      "Zipcode 2",
      "City 2",
      "Country 2"
    );
    customer2.changeAddress(address2);

    await customerRepository.create(customer2);

    const product2 = new Product("2", "Product 2", 20);
    await productRepository.create(product2);

    const orderItem2 = new OrderItem(
      "2",
      product2.name,
      product2.price,
      4,
      product2.id
    );
    const order2 = new Order("2", customer2.id, [orderItem2]);
    await orderRepository.create(order2);

    const orderModel = await orderRepository.findAll();

    expect(JSON.stringify(orderModel)).toStrictEqual(
      JSON.stringify([order, order2])
    );
    expect(orderModel.length).toBe(2);
  });
});
