import { Sequelize } from "sequelize-typescript";

export default class SequelizeTestConfig {
  static config(): Sequelize {
    return new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });
  }
}
