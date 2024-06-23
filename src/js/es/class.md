---
title: Class
icon: class
category: JavaScript
order: 19
---

:::tip
ES6引入了类（class）作为一种更简洁和面向对象的语法糖，用于定义对象的蓝图。类提供了一种声明对象的方式，包含了属性和方法的定义，以及构造函数来初始化对象的状态。
示例：
:::

1. 定义类：

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```

2. 创建对象：

```javascript
const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.sayHello(); // 输出：Hello, my name is Alice and I am 25 years old.
person2.sayHello(); // 输出：Hello, my name is Bob and I am 30 years old.
```

3. 类继承：

```javascript
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    console.log(`I am studying in grade ${this.grade}.`);
  }
}

const student1 = new Student('Alice', 15, 9);
student1.sayHello(); // 输出：Hello, my name is Alice and I am 15 years old.
student1.study(); // 输出：I am studying in grade 9.
```

4. 静态方法和静态属性：

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static PI = 3.14159;
}

console.log(MathUtils.add(2, 3)); // 输出：5
console.log(MathUtils.PI); // 输出：3.14159
```

5. Getter 和 Setter 方法：类可以定义用于访问和修改属性的特殊方法，称为 Getter 和 Setter。

```javascript
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }
}

const circle = new Circle(5);

console.log(circle.area); // 输出：78.53981633974483

circle.diameter = 10;
console.log(circle.radius); // 输出：5
```

6. 类表达式：类可以以表达式的形式创建，可以将类赋值给变量。

```javascript
const Rectangle = class {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  get area() {
    return this.length * this.width;
  }
};

const rectangle = new Rectangle(5, 10);
console.log(rectangle.area); // 输出：50
```

7. 三大特性

   在面向对象编程中，类具有三个重要的特性：封装、继承和多态。这些特性被认为是面向对象编程的基石，下面对每个特性进行详细说明：

   - 封装（Encapsulation）：封装是将数据和操作数据的方法捆绑在一起，形成一个独立的单元的过程。通过封装，我们可以将数据隐藏在对象内部，只暴露有限的接口来访问和操作数据。这样可以提高代码的安全性、可维护性和可重用性。

   示例：

   ```javascript
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }

     sayHello() {
       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
     }
   }

   const person = new Person('Alice', 25);
   person.sayHello(); // 输出：Hello, my name is Alice and I am 25 years old.
   ```

   name 和 age 属性被封装在 Person 类的内部，并通过 sayHello 方法暴露给外部访问。

   - 继承（Inheritance）：继承是指一个类（子类）可以继承另一个类（父类）的属性和方法。通过继承，子类可以获得父类的特性，并可以在此基础上添加自己独有的属性和方法。继承实现了代码的重用和层次化的组织。

   示例：

   ```javascript
   class Animal {
     constructor(name) {
       this.name = name;
     }

     speak() {
       console.log(`${this.name} makes a sound.`);
     }
   }

   class Dog extends Animal {
     constructor(name, breed) {
       super(name);
       this.breed = breed;
     }

     fetch() {
       console.log(`${this.name} fetches the ball.`);
     }
   }

   const dog = new Dog('Buddy', 'Labrador');
   dog.speak(); // 输出：Buddy makes a sound.
   dog.fetch(); // 输出：Buddy fetches the ball.
   ```

   Dog 类继承了 Animal 类，因此它拥有 Animal 类的属性和方法，并添加了自己的 fetch 方法。

   - 多态（Polymorphism）：多态是指在不同的对象上调用相同的方法，实现不同的行为。多态允许我们使用统一的接口来处理不同的对象，并根据对象类型的不同而执行不同的操作。多态提高了代码的灵活性、可扩展性和可维护性。

   示例：

   ```javascript
   class Shape {
     calculateArea() {
       throw new Error("This method should be implemented in subclasses.");
     }
   }

   class Rectangle extends Shape {
     constructor(width, height) {
       super();
       this.width = width;
       this.height = height;
     }

     calculateArea() {
       return this.width * this.height;
     }
   }

   class Circle extends Shape {
     constructor(radius) {
       super();
       this.radius = radius;
     }

     calculateArea() {
       return Math.PI * this.radius ** 2;
     }
   }

   const rectangle = new Rectangle(5, 10);
   const circle = new Circle(7);

   console.log(rectangle.calculateArea()); // 输出：50
   console.log(circle.calculateArea()); // 输出：153.93804002589985
   ```

   Shape 类定义了一个抽象方法 calculateArea，Rectangle 和 Circle 类都继承了 Shape 类，并实现了各自的 calculateArea 方法。通过多态，我们可以统一地调用 calculateArea 方法，但每个对象根据自身的类型来执行不同的计算。

   封装、继承和多态是面向对象编程的核心特性，它们有助于构建灵活、可扩展和易于维护的代码。理解和合理运用这些特性对于设计和实现面向对象的系统非常重要。
