---
title: 对象
icon: object
category: JavaScript
order: 7
---

1. 对象字面量扩展：ES6引入了一些便利的语法来创建和操作对象字面量。

- 属性简写：当属性名称和变量名相同时，可以省略冒号和属性值。

```javascript
const name = 'Alice';
const age = 30;

const person = { name, age };

console.log(person); // 输出：{ name: 'Alice', age: 30 }
```

- 计算属性名：可以使用计算的表达式作为属性名称。

```javascript
const key = 'name';

const person = {
  [key]: 'Alice'
};

console.log(person); // 输出：{ name: 'Alice' }
```

2. 对象解构赋值：可以通过解构赋值从对象中提取属性值，将其赋值给变量。

```javascript
const person = {
  name: 'Alice',
  age: 30
};

const { name, age } = person;

console.log(name); // 输出：'Alice'
console.log(age); // 输出：30
```

3. Object.assign()：`Object.assign()` 方法用于将一个或多个源对象的所有可枚举属性复制到目标对象中。

```javascript
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const result = Object.assign(target, source);

console.log(result); // 输出：{ a: 1, b: 3, c: 4 }
```

4. Object.keys()、Object.values() 和 Object.entries()：`Object.keys()` 方法用于返回一个包含所有自身可枚举属性的数组；`Object.values()` 方法用于返回一个包含所有自身可枚举属性的值的数组；`Object.entries()` 方法用于返回一个包含所有自身可枚举属性的键值对数组。

```javascript
const object = { a: 1, b: 2, c: 3 };

console.log(Object.keys(object)); // 输出：['a', 'b', 'c']
console.log(Object.values(object)); // 输出：[1, 2, 3]
console.log(Object.entries(object)); // 输出：[['a', 1], ['b', 2], ['c', 3]]
```

5. Object.freeze()、Object.seal() 和 Object.preventExtensions()：`Object.freeze()` 方法用于冻结一个对象，使其属性不能被修改、删除或添加新属性；`Object.seal()` 方法用于封闭一个对象，使其属性不能被添加或删除，但可以修改现有属性；`Object.preventExtensions()` 方法用于阻止一个对象的扩展，使其无法添加新的属性。

```javascript
const obj = { a: 1, b: 2 };

Object.freeze(obj);
obj.c = 3; // 无效，不会添加属性c
obj.a = 10; // 无效，不会修改属性a的值
delete obj.b; // 无效，不会删除属性b

console.log(obj); // 输出：{ a: 1, b: 2 }

```

6. 对象方法的简化写法：在ES6中，当一个对象的方法是一个函数时，可以省略函数关键字和冒号。

```javascript
const person = {
  name: 'Alice',
  age: 30,
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};

person.sayHello(); // 输出：Hello, my name is Alice and I'm 30 years old.
```

7. Symbol 属性：ES6引入了一种新的原始数据类型，Symbol，用于表示独一无二的值。Symbol值可以作为对象的属性名，用于创建私有属性或唯一的标识符。

```javascript
const id = Symbol();

const person = {
  name: 'Alice',
  age: 30,
  [id]: '12345'
};

console.log(person[id]); // 输出：'12345'
```

8. 可计算方法名：在ES6中，可以在对象字面量中使用与方法名匹配的表达式。

```javascript
const method = 'sayHello';

const person = {
  [method]() {
    console.log('Hello!');
  }
};

person.sayHello(); // 输出：Hello!
```

9. super 关键字：在类的方法中可以使用 super 关键字来调用父类的方法。

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a sound.');
  }
}

class Dog extends Animal {
  speak() {
    super.speak();
    console.log(this.name + ' barks.');
  }
}

const dog = new Dog('Max');
dog.speak();
// 输出：
// Max makes a sound.
// Max barks.
```