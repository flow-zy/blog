---
title: Bigint 类型
icon: bigint
category: JavaScript
order: 13
---
:::tip
ES6引入了BigInt类型，用于表示超过JavaScript数字范围的整数。
:::

1. BigInt简介：
   - JavaScript中的Number类型有一个固定的范围，超出这个范围的整数将无法精确表示。
   - BigInt类型解决了这个问题，可以表示任意大的整数。

2. 创建BigInt：
   - 在整数后面加上`n`或者调用`BigInt()`构造函数可以创建一个BigInt值。

   ```javascript
   const bigIntNum = 123456789012345678901234567890n;
   const anotherBigIntNum = BigInt("123456789012345678901234567890");
   ```

3. 运算符和方法：
   - BigInt类型可以使用大多数运算符和内置方法进行操作，包括加减乘除、取余、指数运算等。

   ```javascript
   const num1 = 10n;
   const num2 = 5n;

   console.log(num1 + num2); // 15n
   console.log(num1 - num2); // 5n
   console.log(num1 * num2); // 50n
   console.log(num1 / num2); // 2n
   console.log(num1 % num2); // 0n
   console.log(num1 ** num2); // 100000n
   ```

4. 注意事项：
   - BigInt和Number类型不能直接进行混合运算，需要通过`BigInt()`函数进行转换。

   ```javascript
   const bigIntNum = 12345678901234567890n;
   const regularNum = 20;

   console.log(bigIntNum + BigInt(regularNum)); // 12345678901234567890n + 20n = 12345678901234567910n
   ```

5. 类型转换：
   - BigInt可以通过`toString()`方法转换为字符串，也可以通过`Number()`函数将其转换为Number类型，但超出Number范围的BigInt会被转换为Infinity。

   ```javascript
   const bigIntNum = 1234567890n;

   console.log(bigIntNum.toString()); // "1234567890"
   console.log(Number(bigIntNum)); // 1.23456789e+9
   ```

6. 比较运算：
   - BigInt类型可以使用相等运算符（`==`、`===`）进行比较，不同类型的比较结果可能为false。

   ```javascript
   const bigIntNum = 100n;
   const regularNum = 100;

   console.log(bigIntNum == regularNum); // true
   console.log(bigIntNum === regularNum); // false
   ```
