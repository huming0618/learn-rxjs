### 引用计数 `refCount()`
`refCount 的作用是，当有第一个订阅者时，多播 Observable 会自动地启动执行，而当最后一个订阅者离开时，多播 Observable 会自动地停止执行。`
- 多播时无需显式调用connect()方法
- 自动根据订阅数量启动或停止observable
- refCount是种操作符
- 在停止后再次订阅，observable会重置后再启动

### Subject变体 - BehaviorSubject
- 保存了"最新值"
- 订阅时发送"最新值"
- 参见behavior.js

### Subject变体 - ReplaySubject
- 保存一定数量的“前值"
- 也可以定义多久时间内的“前值”
- 参见replay.js和replay-time.js

### Subject变体 - AsyncSubject
- 在调用`complete()`发送最后一个置
- 和`last()` 操作符类似
- 参见async.js
