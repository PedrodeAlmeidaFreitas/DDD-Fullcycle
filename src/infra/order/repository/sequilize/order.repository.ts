import Order from "../../../../domain/checkout/entity/order";
import OrderItem from "../../../../domain/checkout/entity/order_item";
import OrderRepositoryInterface from "../../../../domain/checkout/repository/order-repository.interface";
import OrderItemModel from "./order-item.model";
import OrderModel from "./order.model";

export default class OrderRepository implements OrderRepositoryInterface {
  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total,
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      { include: [{ model: OrderItemModel }] }
    );
  }
  async update(entity: Order): Promise<void> {
    const transaction = await OrderModel.sequelize.transaction();

    try {
      await OrderItemModel.destroy({
        where: {
          order_id: entity.id,
        },
      });

      await entity.items.map((item) =>
        OrderItemModel.create({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
          order_id: entity.id,
        })
      );
      transaction.commit();
    } catch (error) {
      transaction.rollback();
    }
  }
  async delete(id: string): Promise<void> {
    try {
      await OrderItemModel.destroy({
        where: {
          order_id: id,
        },
      });

      await OrderModel.destroy({
        where: {
          id,
        },
      });
    } catch (error) {}
  }
  async find(id: string): Promise<Order> {
    const orderModel = await OrderModel.findOne({
      where: { id },
      include: ["items"],
    });

    if (!orderModel) {
      return;
    }

    const orderItemsModel = orderModel.items.map(
      (item) =>
        new OrderItem(
          item.id,
          item.name,
          item.price,
          item.quantity,
          item.product_id
        )
    );

    return new Order(orderModel.id, orderModel.customer_id, orderItemsModel);
  }
  async findAll(): Promise<Order[]> {
    const orderModel = await OrderModel.findAll({
      include: ["items"],
    });

    return orderModel.map(
      (order) =>
        new Order(
          order.id,
          order.customer_id,
          order.items.map(
            (item) =>
              new OrderItem(
                item.id,
                item.name,
                item.price,
                item.quantity,
                item.product_id
              )
          )
        )
    );
  }
}
