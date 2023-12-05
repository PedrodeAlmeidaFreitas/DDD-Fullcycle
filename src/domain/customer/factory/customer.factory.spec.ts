import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe("Customer factory unit test", () => {
  it("Should create a customer", () => {
    const customer = CustomerFactory.create("John");

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("John");
    expect(customer.rewardPoints).toBe(0);
    expect(customer.address).toBeUndefined();
  });

  it("Should create a customer with an address", () => {
    const address = new Address(
      "Street 1",
      123,
      "25000000",
      "Rio de Janeiro",
      "Brazil"
    );

    const customer = CustomerFactory.createWithAddress("Peter", address);

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("Peter");
    expect(customer.rewardPoints).toBe(0);
    expect(customer.address).toBe(address);
  });

  it("Should throw exception on activate a customer", () => {
    const customer = CustomerFactory.create("John");

    expect(customer.activate).toThrowError(
      "Address is mandatory to activate a customer"
    );
  });
});
