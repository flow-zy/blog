---
title: 迭代器
icon: iterator
category: JavaScript
order: 16
---
:::tip
在ES6中，迭代器（Iterator）是一个对象，它提供了一种统一的访问方式，用于遍历数据集合中的每个元素。迭代器必须实现迭代器协议（Iterator Protocol），即具有一个next()方法，该方法返回一个包含value和done属性的对象，value表示当前迭代的值，done表示迭代是否已结束。
:::
示例：

```javascript
const iterable = [1, 2, 3];
const iterator = iterable[Symbol.iterator]();

console.log(iterator.next()); // 输出：{ value: 1, done: false }
console.log(iterator.next()); // 输出：{ value: 2, done: false }
console.log(iterator.next()); // 输出：{ value: 3, done: false }
console.log(iterator.next()); // 输出：{ value: undefined, done: true }
```

我们使用数组的Symbol.iterator方法获取迭代器对象，然后通过调用迭代器的next()方法逐个访问数组中的元素。每次调用next()方法时，迭代器会返回一个对象，其中value属性表示当前迭代的值，done属性表示迭代是否已结束。

迭代器具有非常广泛的应用，不仅可以对数组进行迭代，还可以对字符串、Set、Map等数据结构进行迭代。你还可以使用自定义对象实现迭代器协议，以便可以像处理数组一样处理自定义对象。

示例：

```javascript
const obj = {
  data: ['a', 'b', 'c'],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return {
            value: this.data[index++],
            done: false
          };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

const iterator = obj[Symbol.iterator]();

console.log(iterator.next()); // 输出：{ value: 'a', done: false }
console.log(iterator.next()); // 输出：{ value: 'b', done: false }
console.log(iterator.next()); // 输出：{ value: 'c', done: false }
console.log(iterator.next()); // 输出：{ value: undefined, done: true }
```

我们定义了一个obj对象，通过Symbol.iterator方法返回一个迭代器对象。在迭代器对象中，我们实现了next()方法，用于逐个返回data数组中的元素。

通过迭代器，我们可以以统一的方式遍历不同类型的数据集合，使数据处理更加灵活和便捷。迭代器的应用可以在各种场景中发挥作用，如迭代器模式、迭代器生成器等。

### 用法

1. for...of 循环：ES6引入了 for...of 循环，用于遍历可迭代对象，提供了一种简洁地遍历迭代器的方法。

```javascript
const iterable = [1, 2, 3];

for (const value of iterable) {
  console.log(value);
}
// 输出：
// 1
// 2
// 3
```

2. 内置可迭代对象：ES6中的一些内置对象，默认实现了迭代器协议，因此可以直接使用 for...of 循环进行遍历，如字符串、数组、Set、Map等。

```javascript
const str = 'Hello';
for (const char of str) {
  console.log(char);
}
// 输出：
// 'H'
// 'e'
// 'l'
// 'l'
// 'o'

const set = new Set([1, 2, 3]);
for (const value of set) {
  console.log(value);
}
// 输出：
// 1
// 2
// 3
```

3. 自定义可迭代对象：可以自定义对象实现迭代器协议，使其可以被 for...of 循环遍历。

```javascript
const obj = {
  values: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.values.length) {
          return {
            value: this.values[index++],
            done: false
          };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

for (const value of obj) {
  console.log(value);
}
// 输出：
// 1
// 2
// 3
```
