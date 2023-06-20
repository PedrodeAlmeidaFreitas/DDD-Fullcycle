import EventHandlerInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default interface EventDispatcherInterface<T> {
  events: Map<string, Array<EventHandlerInterface<T>>>;
  get eventHandlers(): Map<string, Array<EventHandlerInterface<T>>>;
  notify(event: EventInterface<T>): void;
  register(eventName: string, handler: EventHandlerInterface<T>): void;
  unregister(eventName: string, handler: EventHandlerInterface<T>): void;
  unregisterAll(): void;
}
