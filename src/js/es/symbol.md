---
title: Symbol
icon: symbol
category: Javascript
order: 12
---

:::tip
Symbol是ES6中引入的一种新的原始数据类型。它是一种唯一且不可变的值，用于标识对象的属性。Symbol的主要特点是它的值是唯一的，即使创建多个具有相同描述的Symbol，它们也是不相等的。
:::
要创建一个Symbol，可以使用全局的Symbol函数，并可选地传入一个描述符字符串作为参数：

```javascript
const symbol1 = Symbol();
const symbol2 = Symbol('description');

console.log(typeof symbol1); // 输出：symbol
console.log(symbol1 !== symbol2); // 输出：true
```

Symbol可以用作对象的属性键，以确保属性的唯一性。使用Symbol作为属性键时，需要使用方括号语法来访问属性：

```javascript
const mySymbol = Symbol('mySymbol');
const obj = {
  [mySymbol]: 'value'
};

console.log(obj[mySymbol]); // 输出：value
```

Symbol还提供了一些内置的属性，如`Symbol.iterator`用于定义对象的默认迭代器，以及`Symbol.hasInstance`用于定义对象的instanceof操作符行为。此外，ES6还提供了一系列内置的Symbol常量，如`Symbol.iterator`、`Symbol.match`、`Symbol.replace`等。

总而言之，Symbol是一种新的原始数据类型，用于创建唯一且不可变的标识符。它在创建唯一键值、定义对象行为等方面非常有用。

>Symbol的其他一些重要特性和应用：

1. 全局Symbol注册表（Global Symbol Registry）：
   在全局Symbol注册表中，可以注册全局可访问的Symbol，并根据提供的描述符字符串检索它们。

   ```javascript
   const symbol1 = Symbol.for('key1');
   const symbol2 = Symbol.for('key1');

   console.log(symbol1 === symbol2); // 输出：true

   const key = Symbol.keyFor(symbol1);
   console.log(key); // 输出：key1
   ```

   使用`Symbol.for()`方法可以创建一个全局注册的Symbol，如果之前已经有相同描述的注册Symbol存在，则返回已存在的Symbol。使用`Symbol.keyFor()`方法可以获取一个全局Symbol的描述符字符串。

2. Symbol的迭代和反射：
   Symbol拥有自己的内置属性，例如`Symbol.iterator`用于定义自定义对象的迭代器，以及`Symbol.reflect`用于访问对象的反射元信息。

   ```javascript
   const mySymbol = Symbol('mySymbol');

   const obj = {
     a: 1,
     b: 2,
     [mySymbol]: 'hidden'
   };

   for (const key in obj) {
     console.log(key); // 输出：a, b
   }

   const symbols = Object.getOwnPropertySymbols(obj);
   console.log(symbols); // 输出：[Symbol(mySymbol)]

   console.log(Reflect.ownKeys(obj)); // 输出：["a", "b", Symbol(mySymbol)]
   ```

   在迭代对象的属性时，使用`for...in`循环只能获取普通的键，而使用`Object.getOwnPropertySymbols()`可以获取对象上的Symbol键。`Reflect.ownKeys()`方法返回对象的所有键，包括普通键和Symbol键。

3. Symbol的内置常量：
   ES6提供了一些内置的Symbol常量，这些常量在语言中扮演着特殊的角色，例如`Symbol.iterator`、`Symbol.match`、`Symbol.replace`等。它们用于定义特定的操作行为和功能。

   ```javascript
   const arr = [1, 2, 3];

   console.log(arr[Symbol.iterator]); // 内置Symbol常量用于迭代

   const regex = /pattern/;
   console.log(regex[Symbol.match]); // 内置Symbol常量用于正则匹配
   ```

Symbol的应用非常广泛，可以用于创建唯一的属性键，定义对象行为，管理全局Symbol，以及访问内置的Symbol常量。它为开发人员提供了更大的灵活性和控制力。
