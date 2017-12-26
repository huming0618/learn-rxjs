### 可观察对象 Observable

###### 特性
- 多个值的集合
- 惰性. 只有在有订阅的时候才开始执行
- 可同步也可异步返回0到多个值

```
不同于EventEmitter和函数
EventEmitter是非惰性的, 不管有没有订阅，都会执行
函数的调用只能返回单个值, 不能连续返回
```

###### 创建
- `Rx.Observable.create((observer)=>{})`
- 利用API: `of`, `from`, `interval`

###### 订阅
- `observable.subscribe(x => console.log(x));`
- 多个订阅之间是独立的
- 等同于调用函数，提供接收数据的callback

###### 执行
```
var observable = Rx.Observable.create(function subscribe(observer) {
  try {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete(); // 之后都不会产生值
  } catch (err) {
    observer.error(err); // 如果捕获到异常会发送一个错误
  }
});
```

###### 清理
`observable.subscribe().unsubscribe()`
可以在`subscribe()`定义具体清理的执行

