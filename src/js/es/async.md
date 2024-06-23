---
title: Async
order: 19
category: Javascript
description: Async/Await
icon: async
---
:::tip
ES6 中的 `async` 函数是一种特殊的函数，用于更方便地处理异步操作。函数前加上 `async` 关键字表示该函数是一个异步函数，并且它的返回值会被封装在一个 Promise 对象中。
:::
### 实现原理

`async/await` 的实现原理可以通过理解异步生成器（Async Generator）和 Promise 的工作原理来了解。下面是 `async/await` 的实现原理的简要解释：

1. `async` 函数的实现原理：
   - 当定义一个 `async` 函数时，它会被转化为一个返回 Promise 的普通函数。
   - `async` 函数内部的 `await` 关键字会将其后面的表达式转化为一个 Promise 对象，并暂停函数执行，直到这个 Promise 对象被解决（完成）。
   - 在函数暂停时，它会将控制权交回给调用方。
   - 当 Promise 解决后，`async` 函数将从之前暂停的地方恢复执行，并返回解决的值。

2. `await` 表达式的实现原理：
   - `await` 表达式会暂停函数执行，直到传递给它的 Promise 对象被解决。
   - 如果被传递的是一个原始值（非 Promise），它会被包装成一个已解决的 Promise 对象。
   - 在等待期间，`await` 表达式的控制权会被传递回调用方。
   - 一旦 Promise 被解决，`await` 表达式会从解决的 Promise 中提取结果，并将结果返回给调用方。

综上所述，`async/await` 通过将异步操作转化为 Promise，并使用 Promise 的解决（完成）机制来实现异步操作的流程控制。这样，我们可以将异步操作的代码看起来像是同步的，使得异步操作的编写和阅读更加直观、易懂。在内部，它仍然使用了事件循环和回调函数，但是通过 `await` 的语法糖，使得代码更具可读性和可维护性。

`async/await` 是在 ES2017（ES8）引入的，它依赖于 Promise 和生成器功能，因此在运行环境中需要支持这些特性才能正常使用。

### 特点和用法

1. `async` 函数始终返回一个 Promise 对象：无论 `async` 函数的返回值是一个原始值、一个对象还是一个 Promise，它都会被自动封装在一个 Promise 对象中。如果 `async` 函数显式地使用 `return` 关键字返回一个值，该值将作为 Promise 对象的解决值；如果 `async` 函数抛出一个异常，那么 Promise 对象将会被拒绝，并将异常作为拒绝原因。

2. `await` 关键字用于等待一个 Promise 对象的解决：在 `async` 函数内部，可以使用 `await` 关键字来等待一个异步操作的结果。`await` 关键字只能在异步函数内部使用，并且它会暂停函数的执行，等待 Promise 对象的解决（完成），然后返回 Promise 对象的值。在 `await` 关键字后面的表达式可以是一个 Promise 对象，也可以是一个非 Promise 值，如果是非 Promise 值，它会被包装为一个已解决（已完成）的 Promise 对象。

3. `async` 函数内部可以包含一系列的异步操作：在 `async` 函数内部，可以使用常规的控制流语句（如 `if/else`、`for` 循环等），并使用 `await` 关键字来等待异步操作的结果。这使得异步代码的编写更加直观、易读。

下面是一个使用 `async` 函数的示例：

```javascript
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
  console.log("Fetching data...");

  // 模拟异步操作延迟
  await delay(2000);

  // 模拟异步操作返回结果
  return "Data fetched!";
}

async function main() {
  try {
    const result = await fetchData();
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
```

在上面的代码中，`fetchData` 是一个 `async` 函数，它使用 `await` 关键字等待异步操作的结果。`main` 函数也是一个 `async` 函数，它调用了 `fetchData` 并处理可能发生的异常。在 `main` 函数中，我们可以像同步代码一样使用 `await` 关键字来等待异步操作的结果。

`async` 函数提供了一种更加优雅且易读的方式来编写和处理异步操作，使得代码的流程更加直观和易于维护。

4. 异步函数的错误处理：在异步函数中，可以使用 try-catch 块来捕获并处理异步操作中的错误。如果在异步函数中的任何地方抛出了一个异常，那么该异常将会被 Promise 对象拒绝，并可以通过 catch 块进行处理。

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

// 在调用异步函数时，可以使用 catch 块来捕获错误
fetchData()
  .then(data => {
    console.log("Data:", data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
```

如果发生了错误，fetchData 函数中的 catch 块将捕获错误并进行处理。然后，通过使用 `then` 方法和相应的回调函数，以及 `catch` 方法捕获错误，从 Promise 对象中获得数据或者处理错误。

5. 多个异步操作的并行与顺序执行：使用 `await` 关键字，可以实现多个异步操作的并行或顺序执行。可以使用 `Promise.all` 方法将多个 Promise 对象封装成一个新的 Promise 对象，在 `await` 关键字后面等待这个新的 Promise 对象解决（即所有操作完成）。

```javascript
async function fetchMultipleData() {
  const [data1, data2, data3] = await Promise.all([
    fetchDataFromAPI1(),
    fetchDataFromAPI2(),
    fetchDataFromAPI3()
  ]);
  return [data1, data2, data3];
}
```

fetchMultipleData 函数使用 `Promise.all` 将多个异步操作封装成一个 Promise 对象，并使用 `await` 关键字等待所有操作完成。然后，将每个异步操作的结果存储在变量中并返回。
