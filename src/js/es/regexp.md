---
title: 正则表达式
icon: regex
category: JavaScript
order: 11
---
::: tip
ES6对正则表达式进行了一些拓展和增强。
:::

1. 正则表达式的构造函数：
   - ES6引入了`RegExp`构造函数的扩展，允许使用正则表达式作为参数创建新的正则对象。

   ```javascript
   const regex = new RegExp("\\w+", "gi");
   console.log(regex); // /\w+/gi
   ```

2. 正则表达式的修饰符：
   - ES6允许在正则表达式字面量中使用修饰符u，用于处理Unicode字符。

   ```javascript
   const str = "你好，Hello";
   console.log(str.match(/\w+/)); // ["你好", "Hello"]
   console.log(str.match(/\w+/u)); // ["你好", "Hello"]
   ```

3. 正则表达式的新增方法：
   - ES6为正则表达式对象添加了一些新的方法。
   - `RegExp.prototype.flags`：返回正则表达式的修饰符字符串。

   ```javascript
   const regex = /\w+/gi;
   console.log(regex.flags); // "gi"
   ```

4. 正则表达式的新增修饰符：
   - ES6引入了两个新的正则表达式修饰符。
   - `y`修饰符（粘连修饰符）：确保匹配从目标字符串的当前位置开始，实现精确匹配。

   ```javascript
   const str = "abcabcabc";
   const regex = /abc/y;
   console.log(regex.lastIndex); // 0
   console.log(regex.test(str)); // true
   console.log(regex.lastIndex); // 3
   ```

   - `s`修饰符（单行修饰符）：使点字符`.`能够匹配包括换行符在内的所有字符。

   ```javascript
   const str = "foo\nbar";
   console.log(/foo.bar/.test(str)); // false
   console.log(/foo.bar/s.test(str)); // true
   ```

5. 正则表达式的新增属性：
   - ES6为正则表达式对象添加了两个新的属性。
   - `RegExp.prototype.sticky`：判断正则表达式是否开启了粘连修饰符。

   ```javascript
   const regex = /abc/y;
   console.log(regex.sticky); // true
   ```

   - `RegExp.prototype.unicode`：判断正则表达式是否开启了Unicode修饰符。

   ```javascript
   const regex = /abc/u;
   console.log(regex.unicode); // true
   ```
