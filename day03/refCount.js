const Rx = require('rxjs/Rx');

const source = Rx.Observable.interval(500);
const subject = new Rx.Subject();
const refCounted = source.multicast(subject).refCount();

let subscription1, subscription2, subscriptionConnect;

// 这里其实调用了 `connect()`，
// 因为 `refCounted` 有了第一个订阅者
console.log('observerA subscribed');
subscription1 = refCounted.subscribe({
  next: (v) => console.log('observerA: ' + v)
});

setTimeout(() => {
  console.log('observerB subscribed');
  subscription2 = refCounted.subscribe({
    next: (v) => console.log('observerB: ' + v)
  });
}, 600);

setTimeout(() => {
  console.log('observerA unsubscribed');
  subscription1.unsubscribe();
}, 1200);

// 这里共享的 Observable 执行会停止，
// 因为此后 `refCounted` 将不再有订阅者
setTimeout(() => {
  console.log('observerB unsubscribed');
  console.log('all observer are cleared !');
  subscription2.unsubscribe();
}, 4500);

setTimeout(() => {
  console.log('Observable Feed restarted ...');
  console.log('observerX subscribed');
  refCounted.subscribe({
    next: (v) => console.log('observerX: ' + v)
  });
}, 6000);