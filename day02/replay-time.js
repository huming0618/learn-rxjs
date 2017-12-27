const Rx = require("rxjs/Rx");

const subject = new Rx.ReplaySubject(100, 500 /* windowTime */);

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

let i = 1;
setInterval(() => subject.next(i++), 200);

setTimeout(() => {
  subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
  });
}, 1000);