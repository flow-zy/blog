---
title: 字符串的扩展
icon: string
category: JavaScript
order: 4
---
ES6对字符串的拓展主要包括以下几个方面：

1. 模板字符串（Template Strings）：ES6引入了模板字符串，使用反引号（`）包裹起来，并且可以在字符串中插入变量或者表达式。例如：

```javascript
const name = 'Alice';
console.log(`Hello, ${name}!`); // 输出：Hello, Alice!
```

2. 多行字符串：使用传统的字符串需要使用转义字符（\n）来表示多行字符串，而ES6中可以直接使用反引号包裹多行字符串，可以在字符串中保留换行符。例如：

```javascript
const multiline = `这是一段
多行
字符串`;
console.log(multiline);
// 输出：
// 这是一段
// 多行
// 字符串
```

3. 字符串的常用方法拓展：ES6对字符串的常用方法进行了扩展，包括：

   - `startsWith()`：判断字符串是否以指定的字符开头

   - `endsWith()`：判断字符串是否以指定的字符结尾

   - `includes()`：判断字符串是否包含指定的字符

   - `repeat()`：重复字符串指定次数

   - `padStart()`：在字符串的开头补全指定的字符至指定长度

   - `padEnd()`：在字符串的结尾补全指定的字符至指定长度

   - `trimStart()`：删除字符串开头的空格

   - `trimEnd()`：删除字符串结尾的空格

例如：

```javascript
const str = 'Hello, world!';

console.log(str.startsWith('Hello')); // 输出：true
console.log(str.endsWith('world!')); // 输出：true
console.log(str.includes('o')); // 输出：true
console.log(str.repeat(3)); // 输出：Hello, world!Hello, world!Hello, world!
console.log(str.padStart(15, 'x')); // 输出：xxHello, world!
console.log(str.padEnd(15, 'x')); // 输出：Hello, world!xx
console.log('   hello   '.trimStart()); // 输出：hello
console.log('   hello   '.trimEnd()); // 输出：   hello
```

当然！接着上面的内容，还有一些其他的字符串拓展：

4. 字符串解构赋值：ES6中可以使用解构赋值的方式对字符串进行拆分。例如：

```javascript
const [a, b, c] = 'abc';
console.log(a); // 输出：a
console.log(b); // 输出：b
console.log(c); // 输出：c
```

5. Unicode码点的识别和表示：ES6中可以使用`\u{}`语法来表示一个Unicode码点，而且可以正确识别大于0xFFFF的码点。例如：

```javascript
console.log('\u{1F601}'); // 输出：😁
console.log('\u{1F602}'); // 输出：😂
console.log('\u{1F603}'); // 输出：😃
```

6. 字符串的迭代器：ES6中的字符串可以被迭代遍历，可以使用`for...of`循环遍历每一个字符。例如：

```javascript
const str = 'hello';

for (const char of str) {
  console.log(char);
}
// 输出：
// h
// e
// l
// l
// o
```

7. String.raw()方法：String.raw()方法返回一个斜杠转义的字符串。这在处理正则表达式、文件路径等方面很有用。例如：

```javascript
const path = String.raw`C:\Users\Admin\Desktop`;
console.log(path); // 输出：C:\Users\Admin\Desktop
```