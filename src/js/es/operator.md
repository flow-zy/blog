---
title: 运算符的拓展
icon: operator
category: Javascript
order: 10
---

1. 展开运算符（Spread Operator）：
   展开运算符（`...`）可以将可迭代对象（如数组或字符串）展开为单独的元素，或将多个元素合并为数组。

   ```javascript
   const arr1 = [1, 2, 3];
   const arr2 = [...arr1, 4, 5, 6];

   console.log(arr2); // 输出：[1, 2, 3, 4, 5, 6]

   const str = 'Hello';
   const chars = [...str];

   console.log(chars); // 输出：['H', 'e', 'l', 'l', 'o']
   ```

2. 可选链运算符（Optional Chaining Operator）：
   可选链运算符（`?.`）用于安全地访问嵌套的属性或调用嵌套的函数，避免出现未定义或空值时的错误。

   ```javascript
   const person = {
     name: 'Alice',
     address: {
       city: 'New York'
     }
   };

   console.log(person.address?.city); // 输出：New York
   console.log(person.address?.country); // 输出：undefined
   ```

3. 空值合并运算符（Nullish Coalescing Operator）：
   空值合并运算符（`??`）用于确定一个值为`null`或`undefined`时使用默认值。

   ```javascript
   const name = null;
   const defaultName = name ?? 'Unknown';

   console.log(defaultName); // 输出：Unknown
   ```

4. BigInt数据类型和运算符：
   ES6引入了BigInt数据类型，可以表示任意精度的整数。此外，BigInt有自己的运算符，如`+`、`-`、`*`、`**`等。

   ```javascript
   const bigInt1 = BigInt(Number.MAX_SAFE_INTEGER) + 1n;
   const bigInt2 = 123n;
   const sum = bigInt1 + bigInt2;

   console.log(sum); // 输出：9007199254740993n
   ```
