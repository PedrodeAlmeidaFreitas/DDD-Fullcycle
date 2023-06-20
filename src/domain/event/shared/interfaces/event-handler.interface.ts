import EventInterface from "./event.interface";

export default interface EventHandlerInterface<T> {
  handle(eventData: EventInterface<T>): void;
}
