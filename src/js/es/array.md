---
title: 数组的扩展
icon: array
category: JavaScript
order: 6
---


ES6对数组做了许多重要的改进和拓展。

1. 扩展运算符 (Spread Operator)：`...` 扩展运算符可以将一个数组展开为逗号分隔的参数序列，或者将一个字符串展开为字符数组。例如：

```javascript
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];

console.log(array2); // 输出：[1, 2, 3, 4, 5, 6]

const str = 'Hello';
const chars = [...str];

console.log(chars); // 输出：['H', 'e', 'l', 'l', 'o']
```

2. Array.from()：`Array.from()` 方法用于从类似数组或可迭代对象创建一个新的数组实例。它接收一个可迭代对象或类数组对象，并返回一个新的数组。例如：

```javascript
const array1 = Array.from('Hello');

console.log(array1); // 输出：['H', 'e', 'l', 'l', 'o']

const array2 = Array.from([1, 2, 3], x => x * 2);

console.log(array2); // 输出：[2, 4, 6]
```

3. Array.of()：`Array.of()` 方法用于创建一个包含任意数量参数的新数组实例，不考虑参数的类型或数量。例如：

```javascript
const array1 = Array.of(1, 2, 3);

console.log(array1); // 输出：[1, 2, 3]

const array2 = Array.of(5);

console.log(array2); // 输出：[5]
```

4. find() 和 findIndex()：`find()` 方法用于查找数组中满足条件的第一个元素，并返回该元素；`findIndex()` 方法用于查找数组中满足条件的第一个元素的索引，并返回该索引。例如：

```javascript
const array = [1, 2, 3, 4, 5];

const foundElement = array.find(element => element > 3);
console.log(foundElement); // 输出：4

const foundIndex = array.findIndex(element => element > 3);
console.log(foundIndex); // 输出：3
```

5. includes()：`includes()` 方法用于判断数组是否包含某个特定元素，如果包含则返回 true；否则返回 false。例如：

```javascript
const array = [1, 2, 3, 4, 5];

console.log(array.includes(3)); // 输出：true
console.log(array.includes(6)); // 输出：false
```

6. fill()：`fill()` 方法用于将数组的所有元素替换为一个静态值。例如：

```javascript
const array = [1, 2, 3, 4, 5];

console.log(array.fill(0)); // 输出：[0, 0, 0, 0, 0]
```

7. flat() 和 flatMap()：`flat()` 方法用于将嵌套的数组扁平化为一维数组；`flatMap()` 方法首先使用映射函数对原数组的每个元素进行映射，然后将返回的结果使用 `flat()` 方法扁平化。例如：

```javascript
const nestedArray = [1, [2, [3, [4]]]];

console.log(nestedArray.flat()); // 输出：[1, 2, [3, [4]]]
console.log(nestedArray.flat(2)); // 输出：[1, 2, 3, [4]]

const array = [1, 2, 3];

console.log(array.flatMap(x => [x * 2])); // 输出：[2, 4, 6]
```

8. entries()、keys() 和 values()：`entries()` 方法用于返回一个包含数组所有键值对的迭代器；`keys()` 方法用于返回一个包含数组所有键的迭代器；`values()` 方法用于返回一个包含数组所有值的迭代器。例如：

```javascript
const array = ['a', 'b', 'c'];

console.log([...array.entries()]); // 输出：[[0, 'a'], [1, 'b'], [2, 'c']]
console.log([...array.keys()]); // 输出：[0, 1, 2]
console.log([...array.values()]); // 输出：['a', 'b', 'c']
```

9. Array.prototype.includes()：ES7 引入了 `Array.prototype.includes()` 方法，用于检查数组是否包含某个元素。与 `Array.includes()` 静态方法类似，但是它是在数组原型上定义的。例如：

```javascript
const array = [1, 2, 3, 4, 5];

console.log(array.includes(3)); // 输出：true
console.log(array.includes(6)); // 输出：false
```

10. Array.prototype.findLast() 和 Array.prototype.findIndexLast()：这是一些自定义的方法，用于在数组中从后往前查找满足条件的元素和对应的索引。例如：

```javascript
Array.prototype.findLast = function(callback) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback(this[i])) {
      return this[i];
    }
  }
}

Array.prototype.findIndexLast = function(callback) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (callback(this[i])) {
      return i;
    }
  }
}

const array = [1, 2, 3, 4, 5];

console.log(array.findLast(element => element > 3)); // 输出：5
console.log(array.findIndexLast(element => element > 3)); // 输出：4
```
