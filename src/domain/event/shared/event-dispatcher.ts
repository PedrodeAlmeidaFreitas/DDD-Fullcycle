import ProductEventData from "../product/product-event-data";
import EventDispatcherInterface from "./interfaces/event-dispatcher.interface";
import EventHandlerInterface from "./interfaces/event-handler.interface";
import EventInterface from "./interfaces/event.interface";

export default class EventDispatcher
  implements EventDispatcherInterface<ProductEventData>
{
  events: Map<string, EventHandlerInterface<ProductEventData>[]>;

  constructor() {
    this.events = new Map();
  }

  get eventHandlers(): Map<string, EventHandlerInterface<ProductEventData>[]> {
    return this.events;
  }
  notify(event: EventInterface<ProductEventData>): void {
    const eventName = event.constructor.name;

    if (this.eventHandlers.get(eventName)) {
      this.eventHandlers
        .get(eventName)!
        .forEach((handler) => handler.handle(event));
    }
  }
  register(
    eventName: string,
    handler: EventHandlerInterface<ProductEventData>
  ): void {
    if (!this.eventHandlers.get(eventName)) {
      this.eventHandlers.set(eventName, []);
    }
    this.eventHandlers.get(eventName)!.push(handler);
  }
  unregister(
    eventName: string,
    handler: EventHandlerInterface<ProductEventData>
  ): void {
    const handlers = this.eventHandlers.get(eventName);
    if (handlers.length > 0) {
      this.eventHandlers.set(
        eventName,
        handlers.filter((h) => h !== handler)
      );
      return;
    }
    this.eventHandlers.set(eventName, []);
  }
  unregisterAll(): void {
    this.eventHandlers.clear();
  }
}
