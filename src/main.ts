import Order from "./domain/checkout/entity/order";
import OrderItem from "./domain/checkout/entity/order_item";
import Customer from "./domain/customer/entity/customer";
import Address from "./domain/customer/value-object/address";

const address = new Address("Street", 123, "00000-000", "City", "Brazil");
let customer = new Customer("123", "Pedro");
customer.activate();

const item1 = new OrderItem("1", "Product 1", 2, 1, "123");
const item2 = new OrderItem("2", "Item 2", 20, 2, "1234");

const order = new Order("1", "123", [item1, item2]);
