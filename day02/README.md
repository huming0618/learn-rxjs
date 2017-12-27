### 观察者 Observer
observable的消息消费者, 一组回调函数的集合
```
var observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};
```

### 订阅 Subscription
带有`unsubscribe()`的可销毁对象

###### Subscription的合并
`subscription.add(childSubscription);`
可以利用合并来一次取消多个订阅
同样可以使用`subscription.remove(sub)`来去除已经合并的subscription

### Subject
一种特殊的Observable，有以下特性
- 可以多播给多观察者
- 普通的Observable订阅中的Observer都具有独立的执行, Subject不是这样的
- Subject类似事件监听的addEventListener, 它的订阅只是注册而不是执行
- subscription无法区别是否在订阅subject还是普通的observable
- Subject也是**种特殊的observer**, 可以调用`next()`, `error()`,`complete()`来完成对订阅的数值多播
- 因为它是一种observer, 他可以传入订阅方法里面,参见sub-subject.js


### 多播
底层利用了`ConnectableObservable`和`Subject`来进行多播的一种机制, 参见代码multicast.js
###### ConnectableObservable
- 针对它的订阅不会立即执行
- 调用`connect()`方法来开始执行订阅
- `connect()`会返回subscription对象, 可用来取消订阅

 
