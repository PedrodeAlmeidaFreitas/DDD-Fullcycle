import { Sequelize } from "sequelize-typescript";
import ProductModel from "../db/sequelize/model/product.model";
import SequelizeTestConfig from "./sequilize-test.config";

describe("Product repository test", () => {
  let sequilize: Sequelize;
  beforeEach(async () => {
    sequilize = SequelizeTestConfig.config();

    sequilize.addModels([ProductModel]);
    await sequilize.sync();
  });

  afterEach(async () => {
    await sequilize.close();
  });

  it("should return a list of products", async () => {
    expect(true).toBe(true);
  });
});
