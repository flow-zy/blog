---
title: 生成器
icon: generator
category: JavaScript
order: 17
---
:::tip
ES6引入了生成器（Generator）函数作为一种特殊的函数类型，用于生成迭代器。生成器函数通过使用 function* 声明，并包含一个或多个 yield 语句，来控制迭代器的行为。生成器函数返回一个迭代器对象，可以通过调用 next() 方法逐步执行生成器函数，并在每个 yield 语句处暂停执行。
:::
示例：

```javascript
function* generatorFunction() {
  yield 'Hello';
  yield 'World';
  yield '!';
}

const generator = generatorFunction(); // 创建生成器对象

console.log(generator.next()); // 输出：{ value: 'Hello', done: false }
console.log(generator.next()); // 输出：{ value: 'World', done: false }
console.log(generator.next()); // 输出：{ value: '!', done: false }
console.log(generator.next()); // 输出：{ value: undefined, done: true }
```

generatorFunction 是一个生成器函数，包含三个 yield 语句。通过调用 generatorFunction() 创建生成器对象 generator。使用 generator.next() 方法逐步执行生成器函数，每次执行到 yield 语句时会返回一个包含 value 和 done 属性的对象，value 表示生成器当前暂停的值，done 表示生成器是否已完成。

除了生成器函数返回的迭代器对象具有 next() 方法外，它还可以通过 return() 方法提前终止生成器。可以在生成器函数内部使用 try...finally 块来处理清理和善后的逻辑。

```javascript
function* generatorFunction() {
  try {
    yield 'Hello';
    yield 'World';
    yield '!';
  } finally {
    console.log('Cleanup');
  }
}

const generator = generatorFunction();

console.log(generator.next()); // 输出：{ value: 'Hello', done: false }
console.log(generator.next()); // 输出：{ value: 'World', done: false }
console.log(generator.return('Early Termination')); // 输出：{ value: 'Early Termination', done: true }
// 输出：Cleanup
```

调用 generator.return() 方法提供了一个参数，用于指定生成器终止时要返回的值。同时，在 finally 块中的代码会在生成器终止前被执行。

生成器函数的特点是可以生成可迭代的序列，可以通过 yield 语句逐个产生值，并通过迭代器的 next() 方法进行遍历。生成器函数在处理需要逐步执行、懒加载或大量数据的场景中非常有用。

### 用法

1. 生成器函数表达式：除了使用 function* 声明生成器函数外，还可以使用生成器函数表达式创建生成器函数。

```javascript
const generatorFunction = function* () {
  yield 'Hello';
  yield 'World';
  yield '!';
};

const generator = generatorFunction();

console.log(generator.next()); // 输出：{ value: 'Hello', done: false }
console.log(generator.next()); // 输出：{ value: 'World', done: false }
console.log(generator.next()); // 输出：{ value: '!', done: false }
console.log(generator.next()); // 输出：{ value: undefined, done: true }
```

2. 生成器函数参数：生成器函数可以接受参数，并在生成器的执行过程中进行处理。

```javascript
function* generatorFunction(param) {
  yield `Hello, ${param}`;
  yield 'World!';
}

const generator = generatorFunction('John');

console.log(generator.next()); // 输出：{ value: 'Hello, John', done: false }
console.log(generator.next()); // 输出：{ value: 'World!', done: false }
console.log(generator.next()); // 输出：{ value: undefined, done: true }
```

3. yield*语句：在生成器函数中，可以使用 yield* 语句来代理（delegate）另一个生成器函数或可迭代对象的迭代。

```javascript
function* generatorFunction1() {
  yield 'Hello';
  yield 'World';
}

function* generatorFunction2() {
  yield* generatorFunction1();
  yield '!';
}

const generator = generatorFunction2();

console.log(generator.next()); // 输出：{ value: 'Hello', done: false }
console.log(generator.next()); // 输出：{ value: 'World', done: false }
console.log(generator.next()); // 输出：{ value: '!', done: false }
console.log(generator.next()); // 输出：{ value: undefined, done: true }
```

4. 生成器函数与异步操作：生成器函数与异步操作的结合可以简化异步编程，例如使用生成器函数和 Promises 进行协同操作，实现更易读、更可维护的异步代码。

```javascript
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('John');
    }, 1000);
  });
}

function* generatorFunction() {
  const user = yield fetchUser();
  yield `Hello, ${user}!`;
}

const generator = generatorFunction();
const promise = generator.next().value;

promise.then((result) => {
  const greeting = generator.next(result).value;
  console.log(greeting); // 输出：Hello, John!
});
```

5. 生成器与错误处理：生成器函数可以通过 try/catch 语句捕获和处理错误。

```js
function* generatorFunction() {
  try {
    yield 'Hello';
    throw new Error('Something went wrong');
  } catch (error) {
    yield error.message;
  }
}

const generator = generatorFunction();

console.log(generator.next()); // 输出：{ value: 'Hello', done: false }
console.log(generator.next()); // 输出：{ value: 'Something went wrong', done: false }
console.log(generator.next()); // 输出：{ value: undefined, done: true }
```

生成器函数提供了一种简洁、可控的方式来处理异步操作和迭代过程。通过生成器函数，可以编写清晰、可读性强的代码逻辑。

Generator函数的异步应用

生成器函数（Generator Function）可以用于实现异步编程，它结合使用生成器的特性和 Promise 对象，可以创建可暂停和可恢复的异步操作。

下面是一个示例，展示了生成器函数的异步应用：

```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function* asyncGenerator() {
  console.log("Start");
  yield delay(2000);
  console.log("Middle");
  yield delay(1000);
  console.log("End");
}

const generator = asyncGenerator();

function runGenerator() {
  const { value, done } = generator.next();

  if (!done) {
    value.then(() => {
      runGenerator();
    });
  }
}

runGenerator();
```

在上面的代码中，`asyncGenerator` 是一个生成器函数，通过 `yield` 关键字暂停函数的执行，并使用 Promise 对象实现异步操作的延迟。`delay` 函数用于创建一个延迟一定时间的 Promise 对象。

`generator` 是通过调用 `asyncGenerator` 获取的生成器对象，它可以通过 `next` 方法前进到下一个 `yield` 表达式。`runGenerator` 函数用于驱动生成器函数的执行，每次调用 `next` 方法后，通过检查 `done` 属性来判断生成器是否已经完成。

当开始执行 `runGenerator` 函数时，生成器函数会执行到第一个 `yield` 表达式，`value` 对象是一个 Promise 对象，通过调用 `then` 方法来等待异步操作的解决。一旦 Promise 对象解决，`runGenerator` 函数再次被调用，继续执行生成器函数的下一个 `yield` 表达式。

通过交替使用 `yield` 和 `Promise` 对象，生成器函数可以在异步操作中暂停和恢复，实现了更细粒度的控制和异步操作的顺序性。

上述示例是以 ES6 中的生成器函数为基础，通过手动驱动生成器的方式来实现异步操作。随着 `async/await` 的引入，异步生成器（Async Generator）的概念也出现了，它在生成器函数中结合了 `async/await` 的语法糖，更简单和直观地进行异步编程。

### 常见场景

1. 数据流处理：生成器函数可以用于处理大型或无限数据流。通过生成器函数，可以逐步地从数据源中获取数据，并进行处理或筛选，而不需要一次性加载整个数据集到内存中。

```javascript
function* streamData(data) {
  for (let item of data) {
    yield item;
  }
}

async function processData(data) {
  for await (let item of streamData(data)) {
    // 处理数据
  }
}

const data = [1, 2, 3, 4, 5];
processData(data);
```

`streamData` 是一个生成器函数，它逐步返回数据源中的每一项数据。`processData` 函数使用 `for await...of` 循环遍历生成器函数的结果，并对每一项数据进行处理。

2. 异步迭代器：生成器函数可以实现异步迭代器，用于遍历异步数据集合或处理需要异步操作的迭代任务。

```javascript
async function* asyncGenerator() {
  yield await fetchDataFromAPI();
  yield await fetchDataFromDatabase();
  yield await fetchDataFromFile();
}

const generator = asyncGenerator();

(async () => {
  for await (let data of generator) {
    // 处理数据
  }
})();
```

在上述示例中，`asyncGenerator` 是一个生成器函数，它使用 `yield` 关键字和 `await` 关键字暂停和恢复函数的执行，每次返回一个异步操作的结果。通过 `for await...of` 循环，可以遍历异步生成器函数返回的数据，并对每一项进行操作。

3. 并发执行异步任务：生成器函数可以与 Promise.all 组合，实现并发执行多个异步任务并等待它们全部完成。

```javascript
function* asyncTasks() {
  // 定义异步任务
  const task1 = fetchDataFromAPI1();
  const task2 = fetchDataFromAPI2();
  const task3 = fetchDataFromAPI3();

  // 并发执行异步任务
  const results = yield Promise.all([task1, task2, task3]);

  // 返回结果
  return results;
}

const generator = asyncTasks();
const promise = generator.next().value;

promise.then(results => {
  // 处理结果
}).catch(error => {
  // 处理错误
});
```

在上述示例中，`asyncTasks` 是一个生成器函数，它定义了三个异步任务并将它们存储在变量中。然后，使用 Promise.all 将这些任务封装为一个新的 Promise 对象，并通过 `yield` 关键字等待它们全部完成。

在调用 `generator.next().value` 后，返回的是一个 Promise 对象，可以使用 `then` 方法和相应的回调函数处理结果，或使用 `catch` 方法捕获错误。

通过并发执行多个异步任务，可以提高整体的执行效率，并等待它们全部完成后再进行下一步操作。

4. 快速失败并发执行异步任务：如果某个异步任务失败，我们可能希望立即中止其他任务的执行，并抛出或处理失败的任务。

```javascript
function* asyncTasks() {
  const task1 = fetchDataFromAPI1();
  const task2 = fetchDataFromAPI2();
  const task3 = fetchDataFromAPI3();

  try {
    const results = yield Promise.all([task1, task2, task3]);
    return results;
  } catch (error) {
    // 处理错误
    return error;
  }
}

const generator = asyncTasks();
const promise = generator.next().value;

promise.then(results => {
  // 处理结果
}).catch(error => {
  // 处理错误
});
```

在上述示例中，`asyncTasks` 生成器函数中添加了一个 try-catch 块来捕获可能发生的错误。当其中任一异步任务发生错误时，代码会立即进入 catch 块，执行错误处理逻辑。

这种方式可以快速检测到错误并中止其他任务的执行，对于某些情况下需要迅速失败的并发任务执行非常有用。

5. 处理操作取消：生成器函数可以结合使用生成器对象和状态标记来实现操作的取消功能。

```javascript
function* asyncTask() {
  let cancelled = false;

  try {
    while (!cancelled) {
      // 执行异步操作
      yield fetchData();
    }
  } catch (error) {
    // 处理错误
    console.log(error);
  }
}

const generator = asyncTask();
const result = generator.next();

// 取消操作
generator.return();

if (result.done) {
  console.log("Task completed.");
} else {
  console.log("Task cancelled.");
}
```

在上述示例中，`asyncTask` 生成器函数中使用一个 `cancelled` 变量来标记操作是否被取消。通过 `while` 循环，在循环体内部执行异步操作，同时在每次迭代开始前检查 `cancelled` 变量的状态。

通过调用 `generator.return()` 方法，生成器对象会立即结束迭代，并进入 `catch` 块执行错误处理逻辑。

这种方法为异步操作提供了一个手动的取消机制，适用于一些需要控制异步操作生命周期的场景。

6. 遍历事件流：生成器函数可以结合使用 `yield` 表达式和事件监听器，用于异步事件流的遍历和处理。

```javascript
function* eventStream() {
  const emitter = createEventEmitter();

  // 遍历事件流
  while (true) {
    const nextEvent = yield new Promise(resolve => {
      emitter.on('event', resolve);
    });

    // 处理事件
    console.log(nextEvent);
  }
}

const generator = eventStream();
const promise = generator.next().value;

promise.then(() => {
  // 触发事件
  emitter.emit('event', 'Event 1');
}).catch(error => {
  // 处理错误
  console.log(error);
});
```

在上述示例中，`eventStream` 生成器函数通过生成器对象创建了一个 EventEmitter，并使用 `yield` 表达式暂停函数的执行，等待事件被触发。

通过调用 `generator.next().value` 获取一个 Promise 对象，当 Promise 对象被解决后，生成器函数会从之前的暂停点继续执行，并处理接收到的事件。

这种方法允许我们以同步的方式遍历异步事件流，实现了处理事件的逻辑和控制流的分离。
