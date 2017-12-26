const Rx = require('rxjs/Rx');

const observable = Rx.Observable.create(function subscribe(observer) {
  // 追踪 interval 资源
  var intervalID = setInterval(() => {
    observer.next('hi');
  }, 1000);

  // 提供取消和清理 interval 资源的方法
  return function unsubscribe() {
    clearInterval(intervalID);
  };
});

const sub = observable.subscribe(x=>console.log(x));
setTimeout(()=>{
    sub.unsubscribe();
    console.log('stop subscription')
}, 3000);