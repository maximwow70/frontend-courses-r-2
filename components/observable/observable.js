class Observable {
  value;
  subscribers = [];

  constructor(value) {
    this.value = value;
  }

  next(value) {
    this.value = value;
    this.subscribers.forEach((subscriber) => {
      subscriber.action(this.value);
    });
  }

  subscribe(subscriber) {
    this.subscribers = [...this.subscribers, subscriber];
  }

  unsubscribe(subscriber) {
    this.subscribers = this.subscribers.filter((s) => s.id !== subscriber.id);
  }
}
