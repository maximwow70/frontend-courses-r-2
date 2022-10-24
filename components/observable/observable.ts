import Subscriber from "./subscriber";

export class Observable<T> {
  value: T;
  subscribers: Subscriber[] = [];

  constructor(value: T) {
    this.value = value;
  }

  next(value: T) {
    this.value = value;
    this.subscribers.forEach((subscriber) => {
      subscriber.action(this.value);
    });
  }

  subscribe(subscriber: Subscriber) {
    this.subscribers = [...this.subscribers, subscriber];
  }

  unsubscribe(subscriber: Subscriber) {
    this.subscribers = this.subscribers.filter((s) => s.id !== subscriber.id);
  }
}
