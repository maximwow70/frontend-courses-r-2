System.register("components/observable/subscriber", [], function (exports_1, context_1) {
    "use strict";
    var Subscriber;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Subscriber = class Subscriber {
                constructor(id, action) {
                    this.id = 0;
                    this.id = id;
                    this.action = action;
                }
            };
            exports_1("default", Subscriber);
        }
    };
});
System.register("components/observable/observable", [], function (exports_2, context_2) {
    "use strict";
    var Observable;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            Observable = class Observable {
                constructor(value) {
                    this.subscribers = [];
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
            };
            exports_2("Observable", Observable);
        }
    };
});
System.register("index", ["components/observable/observable", "components/observable/subscriber"], function (exports_3, context_3) {
    "use strict";
    var observable_1, subscriber_1, data$, subscriber1, subscriber2, hotel1;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (observable_1_1) {
                observable_1 = observable_1_1;
            },
            function (subscriber_1_1) {
                subscriber_1 = subscriber_1_1;
            }
        ],
        execute: function () {
            data$ = new observable_1.Observable(1);
            subscriber1 = new subscriber_1.default(1, (value) => {
                console.log(value * 2);
            });
            data$.subscribe(subscriber1);
            subscriber2 = new subscriber_1.default(2, (value) => {
                console.log(value * 4);
            });
            data$.subscribe(subscriber2);
            data$.next(4);
            window.data$ = data$;
            hotel1 = {
                id: 123,
                name: "123"
            };
        }
    };
});
//# sourceMappingURL=index.js.map