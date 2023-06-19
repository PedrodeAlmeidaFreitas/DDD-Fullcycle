import Order from "../../domain/entity/order";
import OrderRepositoryInterface from "../../domain/repository/order-repository.interface";

export default class OrderRepository implements OrderRepositoryInterface {
  create(entity: Order): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(entity: Order): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  find(id: string): Promise<Order> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<Order[]> {
    throw new Error("Method not implemented.");
  }
}
