import EventInterface from "../shared/interfaces/event.interface";
import ProductEventData from "./product-event-data";

export default class ProductCreatedEvent
  implements EventInterface<ProductEventData>
{
  dataTimeOccurred: Date;
  eventData: ProductEventData;

  constructor(eventData: ProductEventData) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }
}
