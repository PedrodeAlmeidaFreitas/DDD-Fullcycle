import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

const address = new Address("Street", 123, "00000-000", "City", "Brazil");
let customer = new Customer("123", "Pedro");
customer.activate();

const item1 = new OrderItem("1", "Product 1", 2, 1, "123");
const item2 = new OrderItem("2", "Item 2", 20, 2, "1234");

const order = new Order("1", "123", [item1, item2]);
