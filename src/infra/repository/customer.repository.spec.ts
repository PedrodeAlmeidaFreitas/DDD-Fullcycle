import { Sequelize } from "sequelize-typescript";
import Address from "../../domain/entity/address";
import Customer from "../../domain/entity/customer";
import CustomerModel from "../db/sequelize/model/customer.model";
import CustomerRepository from "./customer.repository";
import SequelizeTestConfig from "./sequilize-test.config";

describe("Customer repository test", () => {
  let sequelize: Sequelize;
  let customerRepository: CustomerRepository;

  beforeEach(async () => {
    sequelize = SequelizeTestConfig.config();
    customerRepository = new CustomerRepository();

    sequelize.addModels([CustomerModel]);
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a customer", async () => {
    const customer = new Customer("123", "John");
    const address = new Address("Street 1", 1, "Zip", "City", "Country");
    customer.changeAddress(address);

    await customerRepository.create(customer);

    const customerModel = await CustomerModel.findOne({ where: { id: "123" } });

    expect(customerModel.toJSON()).toStrictEqual({
      id: customer.id,
      name: customer.name,
      active: customer.active,
      rewardPoints: customer.rewardPoints,
      street: address.street,
      number: address.number,
      zipcode: address.zip,
      city: address.city,
      country: address.country,
    });
  });

  it("should update a customer", async () => {
    const customer = new Customer("123", "John");
    const address = new Address("Street 1", 1, "Zip", "City", "Country");
    customer.changeAddress(address);

    await customerRepository.create(customer);

    customer.changeName("Jane");
    await customerRepository.update(customer);

    const customerModel = await CustomerModel.findOne({ where: { id: "123" } });

    expect(customerModel.toJSON()).toStrictEqual({
      id: customer.id,
      name: customer.name,
      active: customer.active,
      rewardPoints: customer.rewardPoints,
      street: address.street,
      number: address.number,
      zipcode: address.zip,
      city: address.city,
      country: address.country,
    });
  });

  it("should find a customer", async () => {
    const customer = new Customer("123", "John");
    const address = new Address("Street 1", 1, "Zip", "City", "Country");
    customer.changeAddress(address);

    await customerRepository.create(customer);

    const customerResult = await customerRepository.find(customer.id);

    expect(customer).toStrictEqual(customerResult);
  });

  it("should throw an error when customer is not found", async () => {
    expect(async () => {
      await customerRepository.find("456");
    }).rejects.toThrow("Customer not found");
  });

  it("should find all customers", async () => {
    const customer1 = new Customer("123", "John");
    const address1 = new Address("Street 1", 1, "Zip", "City", "Country");
    customer1.changeAddress(address1);

    await customerRepository.create(customer1);

    const customer2 = new Customer("456", "Jane");
    const address2 = new Address("Street 2", 2, "Zip 2", "City 2", "Country 2");
    customer2.changeAddress(address2);

    await customerRepository.create(customer2);

    const customers = await customerRepository.findAll();

    expect(customers).toHaveLength(2);
    expect(customers).toContainEqual(customer1);
    expect(customers).toContainEqual(customer2);
  });
});
