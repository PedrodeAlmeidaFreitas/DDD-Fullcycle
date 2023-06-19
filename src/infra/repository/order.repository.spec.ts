import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../db/sequelize/model/customer.model";
import OrderRepository from "./order.repository";
import SequelizeTestConfig from "./sequilize-test.config";

describe("Order repository test", () => {
  let sequelize: Sequelize;
  let orderRepository: OrderRepository;

  beforeEach(async () => {
    sequelize = SequelizeTestConfig.config();
    orderRepository = new OrderRepository();

    sequelize.addModels([CustomerModel]);
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a customer", async () => {});
});
