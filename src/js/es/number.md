---
title: 数值的扩展
icon: number
category: JavaScript
order: 5
---

ES6对数字的拓展主要包括以下几个方面：

1. 二进制和八进制表示法：ES6中引入了二进制和八进制的新表示法，分别使用`0b`和`0o`作为前缀。例如：

```javascript
const binary = 0b1010; // 二进制表示，相当于十进制的10
const octal = 0o12; // 八进制表示，相当于十进制的10

console.log(binary); // 输出：10
console.log(octal); // 输出：10
```

2. `Number.isFinite()`：用于判断一个值是否为有限的数值。与全局的`isFinite()`函数相比，`Number.isFinite()`不会将非数值的值转换为数值。例如：

```javascript
console.log(Number.isFinite(123)); // 输出：true
console.log(Number.isFinite(Infinity)); // 输出：false
console.log(Number.isFinite('123')); // 输出：false
```

3. `Number.isInteger()`：用于判断一个值是否为整数。与全局的`isInteger()`函数相比，`Number.isInteger()`不会将非数值的值转换为数值。例如：

```javascript
console.log(Number.isInteger(5)); // 输出：true
console.log(Number.isInteger(5.1)); // 输出：false
console.log(Number.isInteger('5')); // 输出：false
```

4. `Number.parseInt()`：用于将字符串解析成整数。与全局的`parseInt()`函数相比，`Number.parseInt()`只能解析整数，也不会忽略字符串开头的空格。例如：

```javascript
console.log(Number.parseInt('123')); // 输出：123
console.log(Number.parseInt('123.45')); // 输出：123
console.log(Number.parseInt('   123   ')); // 输出：123
```

5. `Number.parseFloat()`：用于将字符串解析成浮点数。与全局的`parseFloat()`函数相比，`Number.parseFloat()`不会忽略字符串开头的空格。例如：

```javascript
console.log(Number.parseFloat('3.14')); // 输出：3.14
console.log(Number.parseFloat('   3.14   ')); // 输出：3.14
```

6. 安全整数范围：ES6引入了`Number.MIN_SAFE_INTEGER`和`Number.MAX_SAFE_INTEGER`两个常量，用于表示JavaScript中的安全整数范围。这些范围以`-2^53 + 1`和`2^53 - 1`为界。例如：

```javascript
console.log(Number.MIN_SAFE_INTEGER); // 输出：-9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 输出：9007199254740991
```

7. `Number.isNaN()`：用于判断一个值是否为NaN。与全局的`isNaN()`函数相比，`Number.isNaN()`严格判断，只有当值为NaN时才返回true。例如：

```javascript
console.log(Number.isNaN(NaN)); // 输出：true
console.log(Number.isNaN(123)); // 输出：false
console.log(Number.isNaN('123')); // 输出：false
```

8. `Number.isSafeInteger()`：用于判断一个值是否为安全整数。与全局的`isSafeInteger()`函数相比，`Number.isSafeInteger()`不会将非数值的值转换为数值。例如：

```javascript
console.log(Number.isSafeInteger(123)); // 输出：true
console.log(Number.isSafeInteger(Infinity)); // 输出：false
console.log(Number.isSafeInteger('123')); // 输出：false
```

9. `Math.sign()`：用于判断一个数值的符号，返回1（正数）、-1（负数）、0（0）或NaN（非数值）。例如：

```javascript
console.log(Math.sign(3)); // 输出：1
console.log(Math.sign(-3)); // 输出：-1
console.log(Math.sign(0)); // 输出：0
console.log(Math.sign('abc')); // 输出：NaN
```

10. `Math.trunc()`：用于去除一个数值的小数部分，返回整数部分。例如：

```javascript
console.log(Math.trunc(3.14)); // 输出：3
console.log(Math.trunc(-3.14)); // 输出：-3
console.log(Math.trunc(0.9)); // 输出：0
```

11. 指数运算符：ES2016引入了指数运算符 `**`，用于计算一个数的指数幂。例如：

```javascript
console.log(2 ** 3); // 输出：8
console.log(3 ** 2); // 输出：9
```