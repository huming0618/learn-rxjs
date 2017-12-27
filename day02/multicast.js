const Rx = require('rxjs/Rx');

const source = Rx.Observable.from([1,2,3]);
const subject = new Rx.Subject();

const multicasted = source.multicast(subject);

// 在底层使用了 `subject.subscribe({...})`:
multicasted.subscribe({
     next: (v) => console.log('observerA: ' + v)
})

multicasted.subscribe({
     next: (v) => console.log('observerB: ' + v)
})

multicasted.subscribe({
     next: (v) => console.log('observerC: ' + v)
})

// 在底层使用了 `source.subscribe(subject)`:
multicasted.connect();