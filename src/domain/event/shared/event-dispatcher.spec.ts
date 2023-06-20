import SendEmailWhenProductIsCreatedHandler from "../product/handler/send-email-when-product-is-created.handler";
import EventDispatcher from "./event-dispatcher";

describe("Domain events tests", () => {
  it("should register an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventName = "ProductCreatedEvent";
    const handler = new SendEmailWhenProductIsCreatedHandler();
    eventDispatcher.register(eventName, handler);

    expect(eventDispatcher.eventHandlers.get(eventName)).toBeDefined();
    expect(eventDispatcher.eventHandlers.get(eventName)?.length).toBe(1);
    expect(eventDispatcher.eventHandlers.get(eventName)?.[0]).toMatchObject(
      handler
    );
  });

  it("should unregister an event handler", () => {
    const eventDispatcher = new EventDispatcher();
    const eventName = "ProductCreatedEvent";
    const handler = new SendEmailWhenProductIsCreatedHandler();
    eventDispatcher.register(eventName, handler);

    expect(eventDispatcher.eventHandlers.get(eventName)?.[0]).toMatchObject(
      handler
    );

    eventDispatcher.unregister(eventName, handler);
    expect(eventDispatcher.eventHandlers.get(eventName)).toBeDefined();
    expect(eventDispatcher.eventHandlers.get(eventName)?.length).toBe(0);
  });

  it("should unregister all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventName = "ProductCreatedEvent";
    const handler = new SendEmailWhenProductIsCreatedHandler();
    eventDispatcher.register(eventName, handler);

    expect(eventDispatcher.eventHandlers.get(eventName)?.[0]).toMatchObject(
      handler
    );

    eventDispatcher.unregisterAll();
    expect(eventDispatcher.eventHandlers.get(eventName)).toBeUndefined();
  });
});
