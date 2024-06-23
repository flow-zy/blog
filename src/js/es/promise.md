---
title: Promise
icon: promise
category: JavaScript
order: 18
---
:::tip
ES6 引入的 `Promise` 是一种用于处理异步操作的对象。它提供了一种更优雅的方式来管理和处理异步操作，避免了回调地狱（Callback Hell）的问题。

`Promise` 对象表示一个异步操作的最终完成或失败，并且可以获取其结果。它有三种状态：`pending`（进行中）、`fulfilled`（已完成）和 `rejected`（已拒绝）。一旦 `Promise` 的状态变为 `fulfilled` 或 `rejected`，它就不可变更。
:::
示例：

```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作，比如发送网络请求、读取文件等

  // 当操作成功完成时，调用 resolve，并传递结果
  resolve(result);

  // 当操作失败时，调用 reject，并传递错误信息
  reject(error);
});

promise.then((result) => {
  // 操作成功完成的处理逻辑
}).catch((error) => {
  // 操作失败的处理逻辑
});
```

创建一个 `Promise` 对象时，我们传入一个执行器函数（executor function），它接收两个参数：`resolve` 和 `reject`。我们在这个函数中进行异步操作，并根据操作的结果调用 `resolve` 或 `reject`。

`then()` 方法用于处理异步操作成功的情况，接收一个回调函数作为参数，回调函数的参数是异步操作的结果。

`catch()` 方法用于处理异步操作失败的情况，接收一个回调函数作为参数，回调函数的参数是异步操作的错误信息。

除了 `then()` 和 `catch()`，`Promise` 还提供了其他方法，如 `finally()`、`all()`、`race()` 等。这些方法可以帮助我们更好地控制和组合多个异步操作。

下面是一个简单的示例，展示如何使用 `Promise` 处理异步操作：

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Hello, Promises!';
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then((result) => {
    console.log(result); // 输出：Hello, Promises!
  })
  .catch((error) => {
    console.error(error);
  });
```

### 常用方法

1. 处理多个`Promise`：可以使用 `Promise.all()` 方法组合多个 `Promise` 对象，返回一个新的 `Promise` 对象，它会在所有输入的 `Promise` 对象都成功完成后才会成功。

   `Promise.all()`接收一个可迭代对象（比如数组），并返回一个 Promise，当所有的 Promise 都完成时，它才会变为已完成状态，可以获得所有 Promise 的结果数组。如果任何一个 Promise 失败，它就会变为已拒绝状态。例如：

```javascript
const promise1 = fetchData1();
const promise2 = fetchData2();
const promise3 = fetchData3();

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // 返回包含所有结果的数组
  })
  .catch((error) => {
    console.error(error);
  });
```

2. 赛跑（Race）模式：可以使用 `Promise.race()` 方法组合多个 `Promise` 对象，返回一个新的 `Promise` 对象，它将在其中一个输入的 `Promise` 对象成功或失败后立即完成。

   `Promise.race()`接收一个可迭代对象（比如数组），并返回一个 Promise，当可迭代对象中的任何一个 Promise 完成（不论成功或失败）时，它就会变为已完成状态，并返回该 Promise 的结果。例如：

```javascript
const promise1 = fetchData1();
const promise2 = fetchData2();
const promise3 = fetchData3();

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // 返回最先完成的 Promise 结果
  })
  .catch((error) => {
    console.error(error);
  });
```

3. `Promise.resolve()` 和 `Promise.reject()`：`Promise` 对象提供了两个静态方法来创建已经解决或已经拒绝的 `Promise` 对象。

```javascript
const resolvedPromise = Promise.resolve('Resolved');
const rejectedPromise = Promise.reject(new Error('Rejected'));

resolvedPromise.then((result) => {
  console.log(result); // 输出：Resolved
});

rejectedPromise.catch((error) => {
  console.error(error); // 输出：Error: Rejected
});
```

4. 异步操作的串行执行：可以通过返回 `Promise` 对象并在每个 `then()` 中继续进行下一个异步操作，从而实现异步操作的串行执行。

```javascript
fetchData1()
  .then((result1) => {
    console.log(result1);
    return fetchData2(); // 返回另一个 Promise 对象
  })
  .then((result2) => {
    console.log(result2);
    return fetchData3(); // 返回另一个 Promise 对象
  })
  .then((result3) => {
    console.log(result3);
  })
  .catch((error) => {
    console.error(error);
  });
```

5. `promise.then(onResolved, onRejected)`：注册一个回调函数，用于处理 Promise 的异步操作完成或拒绝的情况。`onResolved` 是当 Promise 被解决（完成）时执行的回调函数，它接收解决（完成）的值作为参数；`onRejected` 是当 Promise 被拒绝（失败）时执行的回调函数，它接收拒绝（失败）的原因作为参数。例如：

```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

promise.then((value) => {
  console.log(value); // 输出 "Success!"
}).catch((error) => {
  console.error(error); // 在这个例子中不会执行
});
```

6. `promise.catch(onRejected)`：注册一个回调函数，用于处理 Promise 的拒绝（失败）情况。这个方法与 `promise.then(null, onRejected)` 相同，用来捕获 Promise 的错误。例如：

```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    reject(new Error("Something went wrong."));
  }, 1000);
});

promise.catch((error) => {
  console.error(error); // 输出错误信息
});
```

7. `promise.finally(onFinally)`：注册一个回调函数，无论 Promise 是被解决还是被拒绝，都会执行该回调函数。通常用于无论如何都需要执行的清理操作。例如：

```javascript
const promise = new Promise((resolve, reject) => {
  // 异步操作
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

promise.finally(() => {
  console.log("Cleanup"); // 无论如何都会执行
});
```
