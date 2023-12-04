import Customer from "../../../../domain/customer/entity/customer";
import CustomerRepositoryInterface from "../../../../domain/customer/repository/customer-repository.interface";
import Address from "../../../../domain/customer/value-object/address";
import CustomerModel from "./customer.model";

export default class CustomerRepository implements CustomerRepositoryInterface {
  async create(entity: Customer): Promise<void> {
    await CustomerModel.create({
      id: entity.id,
      name: entity.name,
      street: entity.address.street,
      number: entity.address.number,
      zipcode: entity.address.zip,
      city: entity.address.city,
      country: entity.address.country,
      active: entity.active,
      rewardPoints: entity.rewardPoints,
    });
  }

  async update(entity: Customer): Promise<void> {
    await CustomerModel.update(
      {
        name: entity.name,
        street: entity.address.street,
        number: entity.address.number,
        zipcode: entity.address.zip,
        city: entity.address.city,
        country: entity.address.country,
        active: entity.active,
        rewardPoints: entity.rewardPoints,
      },
      {
        where: {
          id: entity.id,
        },
      }
    );
  }

  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async find(id: string): Promise<Customer> {
    try {
      const result = await CustomerModel.findOne({ where: { id } });

      const customer = new Customer(result.id, result.name);
      const address = new Address(
        result.street,
        result.number,
        result.zipcode,
        result.city,
        result.country
      );

      customer.changeAddress(address);

      return customer;
    } catch {
      throw new Error("Customer not found");
    }
  }

  async findAll(): Promise<Customer[]> {
    const result = await CustomerModel.findAll();
    return result.map((item) => {
      const customer = new Customer(item.id, item.name);
      customer.addRewardPoints(item.rewardPoints);
      const address = new Address(
        item.street,
        item.number,
        item.zipcode,
        item.city,
        item.country
      );
      customer.changeAddress(address);
      if (item.active) {
        customer.activate();
      }
      return customer;
    });
  }
}
