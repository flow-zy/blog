---
title: Map和Set
icon: tree
category: JavaScript
order: 14
---

## Set（集合）

Set 是一种值的有序列表，它具有唯一性，不允许重复值。Set 集合的元素可以是任意类型。Set 常用的方法有：

- `add(value)`: 向集合中添加一个元素。

- `has(value)`: 检查集合中是否存在指定元素。

- `delete(value)`: 从集合中删除指定元素。

- `size`: 返回集合中元素的个数。

  ```js
  const set = new Set();

  set.add(1);
  set.add(2);
  set.add(3);
  set.add(1); // 重复的值不会被添加

  console.log(set.size); // 输出：3
  console.log(set.has(2)); // 输出：true

  set.delete(2);
  console.log(set.size); // 输出：2

  set.clear();
  console.log(set.size); // 输出：0
  ```

## Map（映射）

Map 是一种键值对的集合，其中每个键和值都可以是任意类型。相比于对象，Map 具有更强大的功能和更容易使用的 API。Map 常用的方法有：

- `set(key, value)`: 向 Map 中添加键值对。
- `get(key)`: 获取指定键对应的值。
- `has(key)`: 检查 Map 中是否存在指定的键。
- `delete(key)`: 删除 Map 中指定的键值对。
- `size`: 返回 Map 中键值对的个数。

```js
const map = new Map();

const key1 = 'key1';
const key2 = { name: 'key2' };
const value1 = 'value1';
const value2 = { name: 'value2' };

map.set(key1, value1);
map.set(key2, value2);

console.log(map.get(key2)); // 输出：{ name: 'value2' }
console.log(map.has(key2)); // 输出：true

map.delete(key1);
console.log(map.size); // 输出：1

map.clear();
console.log(map.size); // 输出：0
```

## WeakSet（弱集合）

WeakSet 是一种与 Set 类似的集合，但它只能存储对象，并且对对象是弱引用，不会阻止对象被垃圾回收。因此，WeakSet 不可迭代且不具备清空全部元素的方法。

WeakSet 的主要用途是存储对象的私有数据。

```js
const weakSet = new WeakSet();

const obj1 = { name: 'obj1' };
const obj2 = { name: 'obj2' };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // 输出：true

weakSet.delete(obj1);
console.log(weakSet.has(obj1)); // 输出：false
```

## WeakMap（弱映射）

WeakMap 是一种与 Map 类似的映射，但它只能以对象作为键，并且对键是弱引用，不会阻止键被垃圾回收。WeakMap 的主要用途是存储对象的附加数据。

WeakMap 的特性使其在某些特定场景中非常有用，例如在对象之间建立一对一的关系并确保不会导致内存泄漏。

```js
const weakMap = new WeakMap();

const key1 = { name: 'key1' };
const key2 = { name: 'key2' };
const value1 = 'value1';
const value2 = { name: 'value2' };

weakMap.set(key1, value1);
weakMap.set(key2, value2);

console.log(weakMap.get(key2)); // 输出：{ name: 'value2' }

weakMap.delete(key1);
console.log(weakMap.has(key1)); // 输出：false
```

## ArrayBuffer（数组缓冲区）

ArrayBuffer 是一种用来存储二进制数据的固定长度缓冲区。它不能直接读取或写入，而是通过 TypedArray 和 DataView 进行操作。

```javascript
const buffer = new ArrayBuffer(16);
const view = new Uint32Array(buffer);

view[0] = 42;
view[1] = 24;

console.log(view.length); // 输出：2
console.log(view[0]); // 输出：42
```

## TypedArray（类型化数组）

TypedArray 是一种处理二进制数据的数组类型。它们基于 ArrayBuffer，提供了对二进制数据的高效读写操作。

```javascript
const buffer = new ArrayBuffer(16);
const int32Array = new Int32Array(buffer);

int32Array[0] = 42;
int32Array[1] = 24;

console.log(int32Array.length); // 输出：8
console.log(int32Array[0]); // 输出：42
```

## DataView（数据视图）

DataView 是一种用来读取和写入 ArrayBuffer 的低级接口，可以通过指定的字节索引访问和修改数据。

```javascript
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer);

view.setInt8(0, 42);
view.setInt16(2, 24);

console.log(view.getInt8(0)); // 输出：42
console.log(view.getInt16(2)); // 输出：24
```
