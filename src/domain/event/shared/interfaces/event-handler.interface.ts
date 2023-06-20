export default interface EventHandlerInterface<T> {
  handle(eventData: T): void;
}
