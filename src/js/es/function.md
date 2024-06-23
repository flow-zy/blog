---
title: 函数的扩展
icon: function
category: Javascript
order: 9
---
1. 箭头函数（Arrow Functions）：
   箭头函数是一种更简洁的函数语法形式，使用箭头（=>）来定义函数，具有更短的语法和更直接的词法作用域绑定。

```javascript
// 传统的函数表达式
const sum = function(a, b) {
  return a + b;
};

// 箭头函数
const sum = (a, b) => a + b;
```

2. 默认参数（Default Parameters）：
   ES6允许在函数参数中指定默认值，简化了处理默认参数的逻辑。

```javascript
function greet(name = 'World') {
  console.log(`Hello, ${name}!`);
}

greet(); // 输出：Hello, World!
greet('Alice'); // 输出：Hello, Alice!
```

3. 展开操作符（Spread Operator）：
   展开操作符（也称为扩展操作符）用三个点（...）表示，可以将数组或可迭代对象展开为单独的元素。

```javascript
const numbers = [1, 2, 3];

console.log(...numbers); // 输出：1 2 3

// 在函数调用中使用展开操作符
function add(a, b, c) {
  return a + b + c;
}

console.log(add(...numbers)); // 输出：6
```

4. 剩余参数（Rest Parameters）：
   剩余参数允许将多个函数参数收集到一个数组中，以便在函数内部进行处理。

```javascript
function sum(...numbers) {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 输出：15
```

5. 函数的rest参数和arguments对象：
   在ES6之前，我们使用`arguments`对象来获取函数参数列表中的所有参数。ES6引入了剩余参数的概念，在函数参数中使用`...`来收集剩余的参数，这样就可以直接访问参数的数组，而不需要使用`arguments`对象。

```javascript
function foo(a, b, ...rest) {
  console.log(a); // 输出：1
  console.log(b); // 输出：2
  console.log(rest); // 输出：[3, 4, 5]
}

foo(1, 2, 3, 4, 5);
```

7. 函数参数和析构赋值（Function Parameters and Destructuring Assignment）：
   ES6引入了参数解构赋值的语法，可以将传入函数的对象或数组解构为单独的变量。

```javascript
function greet({ name, age }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

const person = { name: 'Alice', age: 30 };

greet(person); // 输出：Hello, Alice! You are 30 years old.
```

8. 扩展的函数支持（Enhanced Function Support）：
   ES6提供了一些额外的函数支持，包括尾调用优化、尾递归、块级函数等。

尾调用优化允许JS引擎优化尾部调用，避免不必要的栈帧创建从而提高性能。尾递归是一种特殊的尾调用，用于递归函数中最后一个操作是递归调用的情况，可以避免栈溢出错误。

```javascript
// 尾调用优化
function factorial(n, acc = 1) {
  if (n === 1) return acc;
  return factorial(n - 1, n * acc);
}

console.log(factorial(5)); // 输出：120

// 尾递归
function fibonacci(n, a = 0, b = 1) {
  if (n === 0) return a;
  return fibonacci(n - 1, b, a + b);
}

console.log(fibonacci(7)); // 输出：13
```

块级函数是在块作用域中定义的函数，而不是局限于函数作用域。这意味着在ES6中，可以在if语句、循环或任意块中定义函数。

```javascript
if (true) {
  function foo() {
    console.log('Inside block');
  }

  foo(); // 输出：Inside block
}

foo(); // 抛出 ReferenceError: foo is not defined
```

9. 函数的尾逗号（Trailing Commas in Function Parameters）：
   ES6允许在函数参数列表的尾部添加逗号，使得添加和删除参数更加方便。

```javascript
function foo(a, b,) {
  // ...
}

foo(1, 2,); // 合法，尾部逗号被忽略
```

10. 函数的name属性：
    ES6规定函数有一个名为`name`的只读属性，用于获取函数的名称。

```javascript
function foo() {}

console.log(foo.name); // 输出：foo
```

这些特性使得函数编写更简洁、灵活和易读。某些特性可能需要在目标环境中进行支持或使用特定的语法转换工具（例如Babel）。
