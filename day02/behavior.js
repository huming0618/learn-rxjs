const Rx = require("rxjs/Rx");

const subject = new Rx.BehaviorSubject(0);

subject.subscribe((v)=>{console.log('A: Got...', v)});
subject.subscribe((v)=>{console.log('B: Got...', v)});

subject.next(1);
subject.next(2);

subject.subscribe((v)=>{console.log('C: Got...[last]', v)});

subject.next(3);