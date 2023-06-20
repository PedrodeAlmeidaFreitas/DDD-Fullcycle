import EventHandlerInterface from "../../shared/interfaces/event-handler.interface";
import ProductEventData from "../product-event-data";

export default class SendEmailWhenProductIsCreatedHandler
  implements EventHandlerInterface<ProductEventData>
{
  handle(eventData: ProductEventData): void {
    console.log("Sending email to customer...", eventData.name);
  }
}
