---
title: 解构赋值
order: 3
icon: structure
category: JavaScript
---

# 解构赋值

解构赋值是一种通过模式匹配来提取数组或对象中的值，并将其赋值给对应的变量。下面详细介绍解构赋值的语法和用法。

1. 数组解构赋值

数组解构赋值使用`[]`来进行匹配和赋值。

示例：

```javascript
let [a, b, c] = [1, 2, 3];

console.log(a); // 输出 1
console.log(b); // 输出 2
console.log(c); // 输出 3
```

数组解构赋值可以忽略某些元素，使用逗号来跳过对应的位置。

示例：

```javascript
let [a, , c] = [1, 2, 3];

console.log(a); // 输出 1
console.log(c); // 输出 3
```

也可以设置默认值，在解构得到的值为`undefined`时使用默认值。

示例：

```javascript
let [a = 0, b = 0, c = 0] = [1, undefined, 3];

console.log(a); // 输出 1
console.log(b); // 输出 0，默认值生效
console.log(c); // 输出 3
```

2. 对象解构赋值

对象解构赋值使用`{}`来进行匹配和赋值。

示例：

```javascript
let {x, y} = {x: 1, y: 2};

console.log(x); // 输出 1
console.log(y); // 输出 2
```

对象解构赋值可以设置默认值，并在对象属性不存在时使用默认值。

示例：

```javascript
let {x = 0, y = 0} = {};

console.log(x); // 输出 0
console.log(y); // 输出 0
```

可以通过别名重命名解构得到的变量。

示例：

```javascript
let {x: a, y: b} = {x: 1, y: 2};

console.log(a); // 输出 1
console.log(b); // 输出 2
```

对象解构赋值也支持嵌套的解构模式。

示例：

```javascript
let {x, nestedObj: {y}, z = 0} = {x: 1, nestedObj: {y: 2}};

console.log(x); // 输出 1
console.log(y); // 输出 2
console.log(z); // 输出 0
```

解构赋值还可以与函数参数、函数返回值等结合使用，以便更方便地处理复杂的数据结构。

示例：

```javascript
function getCoords() {
  return {x: 1, y: 2};
}

let {x, y} = getCoords();

console.log(x); // 输出 1
console.log(y); // 输出 2
```

通过使用解构赋值，可以简化变量的赋值过程，并使代码更加简洁、易读。掌握解构赋值的使用方法可以提高编码效率和代码质量。
