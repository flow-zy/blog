---
title: Proxy Reflect
icon: proxy
category: JavaScript
order: 15
---


## Proxy
:::tip
代理（Proxy）是ES6中引入的一种元编程机制，允许你拦截和自定义对象的操作。通过使用代理，你可以修改对象的默认行为，例如拦截属性的读取、写入操作，添加额外的操作等。其中，`Proxy` 对象用于创建代理，`handler` 对象用于定义代理对象的行为。
:::
示例：

```javascript
const target = { name: 'John' }; // 被代理的对象

const handler = {
  get: function(target, prop) { // 拦截属性的读取
    console.log(`Getting ${prop}`);
    return target[prop];
  },
  set: function(target, prop, value) { // 拦截属性的写入
    console.log(`Setting ${prop} to ${value}`);
    target[prop] = value;
  }
};

const proxy = new Proxy(target, handler); // 创建代理对象

console.log(proxy.name); // 拦截属性的读取，输出：Getting name，John
proxy.age = 25; // 拦截属性的写入，输出：Setting age to 25
console.log(proxy.age); // 拦截属性的读取，输出：Getting age，25
```

创建了一个名为 `target` 的对象，然后通过 `Proxy` 创建了一个代理对象 `proxy`。通过在 `handler` 对象中定义 `get` 和 `set` 方法，我们可以拦截属性的读取和写入操作，并在控制台输出相应的信息。

除了拦截属性的读取和写入，代理还可以拦截一系列操作，例如函数调用、构造函数、in运算符等。
常用的代理拦截操作：

- `get(target, prop, receiver)`: 拦截属性的读取操作。
- `set(target, prop, value, receiver)`: 拦截属性的写入操作。
- `apply(target, thisArg, argumentsList)`: 拦截函数调用操作。
- `construct(target, argumentsList, newTarget)`: 拦截构造函数调用操作。
- `has(target, prop)`: 拦截 `in` 运算符的操作。

```javascript
const target = {
  name: 'John',
  greeting: function() {
    return `Hello, ${this.name}!`;
  }
};

const handler = {
  get: function(target, prop) {
    if (prop === 'age') {
      return 25;
    }
    return target[prop];
  },
  apply: function(target, thisArg, argumentsList) {
    console.log('Calling greeting()');
    return target.greeting.apply(thisArg, argumentsList);
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // 输出：John
console.log(proxy.age); // 输出：25
console.log(proxy.greeting()); // 输出：Calling greeting()，Hello, John!
```

我们通过在 `handler` 对象中定义 `get` 和 `apply` 方法，实现了对属性读取和函数调用的拦截。`get` 方法可以在读取属性时返回特定的值，`apply` 方法可以在调用函数时添加额外的操作。

代理是一个强大的特性，它提供了修改和控制对象行为的灵活性。通过使用代理，你可以在不改变原始对象的情况下进行自定义操作和增加功能。

### 用法

1. `deleteProperty`：拦截属性的删除操作。

```javascript
const target = { name: 'John' };

const handler = {
  deleteProperty: function(target, prop) {
    console.log(`Deleting ${prop}`);
    delete target[prop];
    return true;
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.name); // 输出：John
delete proxy.name; // 拦截属性的删除操作，输出：Deleting name
console.log(proxy.name); // 输出：undefined
```

2. `getPrototypeOf`和 `setPrototypeOf`：拦截获取和设置原型操作。

```javascript
const target = { name: 'John' };

const handler = {
  getPrototypeOf: function(target) {
    console.log('Getting prototype');
    return Object.getPrototypeOf(target);
  },
  setPrototypeOf: function(target, prototype) {
    console.log('Setting prototype');
    Object.setPrototypeOf(target, prototype);
    return true;
  }
};

const proxy = new Proxy(target, handler);

console.log(Object.getPrototypeOf(proxy)); // 输出：Getting prototype，{}
Object.setPrototypeOf(proxy, {}); // 拦截设置原型操作，输出：Setting prototype
```

3. has 和 ownKeys：拦截 `in` 运算符和 `Object.getOwnPropertyNames`、`Object.getOwnPropertySymbols` 的操作。

```javascript
const target = { name: 'John' };

const handler = {
  has: function(target, prop) {
    console.log(`Checking property existence: ${prop}`);
    return prop in target;
  },
  ownKeys: function(target) {
    console.log('Getting own property keys');
    return Reflect.ownKeys(target);
  }
};

const proxy = new Proxy(target, handler);

console.log('name' in proxy); // 拦截 `in` 运算符的操作，输出：Checking property existence: name，true
console.log(Object.getOwnPropertyNames(proxy)); // 输出：Getting own property keys，[ 'name' ]
```

4. 更多用途：除了上述示例外，代理还可以拦截其他操作，例如拦截原始值与对象的操作，拦截属性描述符、构造函数调用等。

```javascript
const handler = {
  get: function(target, prop, receiver) {
    if (typeof target[prop] === 'function') {
      return new Proxy(target[prop], {
        apply: function(target, thisArg, argumentsList) {
          console.log(`Calling ${prop}()`);
          return Reflect.apply(target, thisArg, argumentsList);
        }
      });
    }
    return target[prop];
  },
  defineProperty: function(target, prop, descriptor) {
    console.log(`Defining property: ${prop}`);
    return Object.defineProperty(target, prop, descriptor);
  }
};

const obj = {
  name: 'John',
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  }
};

const proxy = new Proxy(obj, handler);

proxy.greet(); // 输出：Calling greet()，Hello, John!
proxy.age = 25; // 拦截属性的定义操作，输出：Defining property: age
console.log(proxy.age); // 输出：25
```

5. `apply`：拦截函数的调用操作。

```javascript
const target = function(name) {
  console.log(`Hello, ${name}!`);
};

const handler = {
  apply: function(target, thisArg, argumentsList) {
    console.log('Calling target function');
    return Reflect.apply(target, thisArg, argumentsList);
  }
};

const proxy = new Proxy(target, handler);

proxy('John'); // 拦截函数的调用操作，输出：Calling target function，Hello, John!
```

6. `construct`：拦截构造函数的调用操作。

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const handler = {
  construct: function(target, argumentsList, newTarget) {
    console.log('Calling Person constructor');
    return Reflect.construct(target, argumentsList, newTarget);
  }
};

const proxy = new Proxy(Person, handler);

const john = new proxy('John'); // 拦截构造函数的调用操作，输出：Calling Person constructor
console.log(john instanceof Person); // 输出：true
console.log(john.name); // 输出：John
```

7. `isExtensible、preventExtensions、getOwnPropertyDescriptor`：拦截对象的可扩展性、阻止扩展和获取属性描述符的操作。

```javascript
const target = {};

const handler = {
  isExtensible: function(target) {
    console.log('Checking extensible');
    return Reflect.isExtensible(target);
  },
  preventExtensions: function(target) {
    console.log('Preventing extensions');
    return Reflect.preventExtensions(target);
  },
  getOwnPropertyDescriptor: function(target, prop) {
    console.log(`Getting property descriptor: ${prop}`);
    return Reflect.getOwnPropertyDescriptor(target, prop);
  }
};

const proxy = new Proxy(target, handler);

console.log(Object.isExtensible(proxy)); // 拦截对象的可扩展性操作，输出：Checking extensible，true
Object.preventExtensions(proxy); // 拦截阻止扩展操作，输出：Preventing extensions
console.log(Object.getOwnPropertyDescriptor(proxy, 'name')); // 拦截获取属性描述符操作，输出：Getting property descriptor: name，undefined
```

8. `getOwnPropertyNames`：拦截 `Object.getOwnPropertyNames()` 的操作。

```javascript
const target = {
  name: 'John',
  age: 25
};

const handler = {
  getOwnPropertyNames: function(target) {
    console.log('Getting own property names');
    return Reflect.ownKeys(target);
  }
};

const proxy = new Proxy(target, handler);

console.log(Object.getOwnPropertyNames(proxy)); // 拦截 `Object.getOwnPropertyNames()` 的操作，输出：Getting own property names，[ 'name', 'age' ]
```

9. `getPrototypeOf` 和 `setPrototypeOf`：拦截获取和设置原型操作。

```javascript
const target = { name: 'John' };

const handler = {
  getPrototypeOf: function(target) {
    console.log('Getting prototype');
    return Object.getPrototypeOf(target);
  },
  setPrototypeOf: function(target, prototype) {
    console.log('Setting prototype');
    Object.setPrototypeOf(target, prototype);
    return true;
  }
};

const proxy = new Proxy(target, handler);

console.log(Object.getPrototypeOf(proxy)); // 输出：Getting prototype，{}
Object.setPrototypeOf(proxy, {}); // 拦截设置原型操作，输出：Setting prototype
```

10. `construct`和 `apply`：拦截构造函数和函数的调用操作。

```javascript
function Person(name) {
  this.name = name;
}

const handler = {
  construct: function(target, argumentsList) {
    console.log('Calling Person constructor');
    return Reflect.construct(target, argumentsList);
  },
  apply: function(target, thisArg, argumentsList) {
    console.log('Calling function');
    return Reflect.apply(target, thisArg, argumentsList);
  }
};

const proxyConstructor = new Proxy(Person, handler);
const proxyFunction = new Proxy(function() {}, handler);

const john = new proxyConstructor('John'); // 拦截构造函数的调用操作，输出：Calling Person constructor
proxyFunction(); // 拦截函数的调用操作，输出：Calling function
```

11. `Proxy.revocable`：创建可撤销的代理对象。

```javascript
const target = { name: 'John' };

const handler = {
  get: function(target, prop) {
    console.log(`Getting ${prop}`);
    return target[prop];
  }
};

const { proxy, revoke } = Proxy.revocable(target, handler);

console.log(proxy.name); // 输出：Getting name，John

revoke(); // 撤销代理

console.log(proxy.name); // 抛出 TypeError：Cannot perform 'get' on a proxy that has been revoked
```

12. proxy陷阱的嵌套使用：可以在一个陷阱中使用另一个代理。

```javascript
const target = {};

const handler1 = {
  get: function(target, prop) {
    console.log('Inside handler 1');
    return target[prop];
  }
};

const handler2 = {
  get: function(target, prop) {
    console.log('Inside handler 2');
    return 'Value from handler 2';
  }
};

const proxy1 = new Proxy(target, handler1);
const proxy2 = new Proxy(proxy1, handler2);

console.log(proxy2.name); // 先调用 handler2 的 get 陷阱，输出：Inside handler 2，Value from handler 2
```


## Reflect

ES6 中的 `Reflect` 是一个内置对象，提供了一组静态方法，用于对对象进行操作。`Reflect` 的目的是将一些常见的对象操作功能从原始对象上分离出来，使代码更加清晰、简洁和易于理解。

### 常用方法

1. `Reflect.get(target, propertyKey [, receiver])`：获取目标对象中指定属性的值，类似于 `target[propertyKey]`。

```javascript
const person = { name: 'John' };
const name = Reflect.get(person, 'name');
console.log(name); // 输出：John
```

2. `Reflect.set(target, propertyKey, value [, receiver])`：将值赋给目标对象的指定属性，类似于 `target[propertyKey] = value`。

```javascript
const person = { name: 'John' };
Reflect.set(person, 'name', 'Jane');
console.log(person.name); // 输出：Jane
```

3. `Reflect.has(target, propertyKey)`：检查目标对象是否具有指定的属性，类似于 `propertyKey in target`。

```javascript
const person = { name: 'John' };
const hasName = Reflect.has(person, 'name');
console.log(hasName); // 输出：true
```

4. `Reflect.deleteProperty(target, propertyKey)`：从目标对象中删除指定的属性，类似于 `delete target[propertyKey]`。

```javascript
const person = { name: 'John' };
Reflect.deleteProperty(person, 'name');
console.log(person.name); // 输出：undefined
```

5. `Reflect.apply(target, thisArg, argumentsList)`：调用目标对象中的函数，并传递指定的参数列表。

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

Reflect.apply(greet, null, ['John']); // 输出：Hello, John!
```

6. `Reflect.defineProperty(target, propertyKey, attributes)`：定义或修改目标对象的属性，类似于`Object.defineProperty()`。返回一个布尔值，表示属性是否成功定义或修改。

```javascript
const person = {};
Reflect.defineProperty(person, 'name', {
  value: 'John',
  writable: false,
  enumerable: true,
  configurable: true
});
console.log(person.name); // 输出：John
person.name = 'Jane'; // 由于writable为false，赋值不生效
console.log(person.name); // 输出：John
```

7. `Reflect.construct(target, argumentsList [, newTarget])`：使用指定的参数列表调用构造函数，创建一个新的实例对象。第三个参数`newTarget`可选，用于在构造函数内部使用`new.target`。

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
}

const john = Reflect.construct(Person, ['John']);
console.log(john instanceof Person); // 输出：true
console.log(john.name); // 输出：John
```

8. `Reflect.getPrototypeOf(target)`：获取目标对象的原型对象，类似于`Object.getPrototypeOf()`。

```javascript
const person = { name: 'John' };
const prototype = Reflect.getPrototypeOf(person);
console.log(prototype); // 输出：{}
```

9. `Reflect.setPrototypeOf(target, prototype)`：设置目标对象的原型对象，类似于`Object.setPrototypeOf()`。如果设置成功，返回`true`，否则返回`false`。

```javascript
const person = { name: 'John' };
const prototype = { greet() { console.log(`Hello, ${this.name}!`); } };
Reflect.setPrototypeOf(person, prototype);
person.greet(); // 输出：Hello, John!
```

10. `Reflect.ownKeys(target)`：返回目标对象的所有自身属性键（包括不可枚举属性），类似于`Object.getOwnPropertyNames()`和`Object.getOwnPropertySymbols()`的组合。

```javascript
const person = {
  name: 'John',
  [Symbol('age')]: 25
};
const keys = Reflect.ownKeys(person);
console.log(keys); // 输出：['name', Symbol(age)]
```

11. `Reflect.preventExtensions(target)`：阻止目标对象添加新属性和扩展现有属性。返回一个布尔值，表示是否成功将目标对象设置为不可扩展。

```javascript
const person = { name: 'John' };
Reflect.preventExtensions(person);
person.age = 25; // 添加新属性无效
console.log(person); // 输出：{ name: 'John' }
```

12. `Reflect.isExtensible(target)`：检查目标对象是否可扩展，类似于`Object.isExtensible()`。

```javascript
const person = { name: 'John' };
console.log(Reflect.isExtensible(person)); // 输出：true
Reflect.preventExtensions(person);
console.log(Reflect.isExtensible(person)); // 输出：false
```

13. `Reflect.getOwnPropertyDescriptor(target, propertyKey)`：获取目标对象的指定属性的属性描述符，类似于`Object.getOwnPropertyDescriptor()`。

```javascript
const person = { name: 'John' };
const descriptor = Reflect.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor); // 输出：{ value: 'John', writable: true, enumerable: true, configurable: true }
```

14. `Reflect.enumerate(target)` (已废弃)：返回一个迭代器对象，用于遍历目标对象的字符串键属性。它与`for...in`循环的行为类似，但过时并不推荐使用。

```javascript
const person = { name: 'John', age: 25 };
for (const key of Reflect.enumerate(person)) {
  console.log(key); // 输出：'name' 和 'age'
}
```

《ECMAScript 6》已经废弃了`Reflect.enumerate()` 方法，并且在ES6规范的最终版本中不再推荐使用。
