import Address from "./address";
import Customer from "./customer";

describe("Customer unit test", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Customer("", "John");
    }).toThrowError("Id is mandatory to activate a customer");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new Customer("123", "");
    }).toThrowError("Name is mandatory to activate a customer");
  });

  it("should change name", () => {
    const customer = new Customer("123", "Jhon");
    customer.changeName("Jane");
    expect(customer.name).toBe("Jane");
  });

  it("should activate customer", () => {
    const customer = new Customer("123", "Jhon");
    const address = new Address("Street", 1, "000000", "City", "State");

    customer.Address = address;

    expect(customer.active).toBe(false);

    customer.activate();

    expect(customer.active).toBe(true);
  });

  it("should throw error when address is undefined", () => {
    const customer = new Customer("123", "Jhon");

    expect(() => {
      customer.activate();
    }).toThrowError("Address is mandatory to activate a customer");
  });

  it("should deactivate customer", () => {
    const customer = new Customer("123", "Jhon");
    customer.deactivate();

    expect(customer.active).toBe(false);
  });

  it("should add reward points", () => {
    const customer = new Customer("123", "Jhon");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
