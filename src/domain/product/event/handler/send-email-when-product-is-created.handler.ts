import EventHandlerInterface from "../../../@shared/event/interfaces/event-handler.interface";
import EventInterface from "../../../@shared/event/interfaces/event.interface";
import ProductEventData from "../product-event-data";

export default class SendEmailWhenProductIsCreatedHandler
  implements EventHandlerInterface<ProductEventData>
{
  handle({ eventData }: EventInterface<ProductEventData>): void {
    console.log("Sending email to customer...", eventData.name);
  }
}
