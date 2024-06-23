---
title: pinia
description:  pinia
keywords:  pinia
category:
  - Web
  - 前端
  - 状态管理库
tag: pinia
---

## 介绍
1. `Pinia` 是什么？
Pinia 是一个基于 Vue 3 的状态管理库，旨在帮助开发者更轻松地管理 Vue 应用程序的状态。它提供了一种简单而强大的方式来组织和共享应用程序的状态，并且与 Vue 3 生态系统紧密集成。
2. 为什么要用 `Pinia`？

- Vue 3 生态系统的一部分：Pinia 是专为 Vue 3 设计的状态管理库，与 Vue 3 生态系统完美集成。如果你的项目正在使用 Vue 3，Pinia 是一个天然的选择。

- 模块化和组织化：Pinia 支持将状态和操作模块化，使得代码结构更清晰、可维护性更高。你可以根据业务需求将状态分割成多个模块，并且可以在需要时轻松地引入或移除模块。

- 类型安全：Pinia 对 TypeScript 有很好的支持，可以通过类型检查来确保代码的健壮性和可靠性。这使得在大型项目中开发和维护代码更加容易。

- 性能优化：Pinia 借助 Vue 3 的响应式系统，实现了高效的状态管理，能够有效地减少不必要的重新渲染，并且在性能上有一定的优势。

- 轻量级：Pinia 的体积相对较小，不会给应用程序增加过多的额外负担。它提供了一种简洁而强大的方式来管理应用程序的状态，同时保持了较高的性能和灵活性。


3. 安装 `Pinia`

要安装 Pinia，你可以使用 npm 或 yarn：

使用 npm：
```bash
npm install pinia@next
```

使用 yarn：
```bash
yarn add pinia@next
```

## 基本用法

1. 创建 `Pinia` 实例

```js
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

// 创建 Pinia 实例
const pinia = createPinia();

// 创建 Vue 应用程序
const app = createApp(App);

// 将 Pinia 实例挂载到 Vue 应用程序上
app.use(pinia);

// 将 Vue 应用程序挂载到 DOM 上
app.mount('#app');
```

2. 创建 `Pinia` 状态管理器
```js
import { defineStore } from 'pinia';

// 定义一个名为 CounterStore 的状态管理器
export const useCounterStore = defineStore({
  // 定义命名空间
  id: 'counter',
  // 定义状态
  state: () => ({
    count: 0,
  }),
  // 定义操作
  actions: {
    // 增加计数
    increment() {
      this.count++;
    },
    // 减少计数
    decrement() {
      this.count--;
    },
    // 重置计数
    reset() {
      this.count = 0;
    },
  },
});

```

使用 `defineStore` 函数来定义一个名为 `CounterStore` 的状态管理器。指定了一个命名空间 `counter`，然后定义了一个状态 `count`，初始值为 `0`。接着，我们定义了三个操作：`increment`、`decrement` 和 `reset`，分别用于增加、减少和重置计数器的值。


2. 使用 `Pinia`

```vue
<template>
  <div>
    <p>Count: {{ counter }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
import { useCounterStore } from './store';

export default {
  setup() {
    // 获取 CounterStore 实例
    const counterStore = useCounterStore();

    // 从状态管理器中获取计数器的值和操作
    const counter = counterStore.count;
    const { increment, decrement, reset } = counterStore;

    return {
      counter,
      increment,
      decrement,
      reset,
    };
  },
};
</script>

```
首先导入了 `useCounterStore` 函数来获取 `CounterStore` 的实例。然后，我们从实例中获取了计数器的值 `counter`，以及增加、减少和重置计数器的操作。在模板中使用这些值和操作来显示计数器的当前值，并添加按钮来执行操作


## 状态管理

1. 状态的定义和使用
在使用 Pinia 管理状态时，你首先需要定义状态，然后在你的组件中使用这些状态。让我们更详细地了解一下。

### 1. 定义状态：

在 Pinia 中，你可以使用 `defineStore` 函数来定义状态。下面是一个示例，定义了一个名为 `UserStore` 的状态管理器：

```javascript
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  // 定义命名空间
  id: 'user',
  // 定义状态
  state: () => ({
    // 用户信息
    user: null,
    // 是否已登录
    isLoggedIn: false,
  }),
  // 定义操作
  actions: {
    // 登录操作
    login(userInfo) {
      this.user = userInfo;
      this.isLoggedIn = true;
    },
    // 注销操作
    logout() {
      this.user = null;
      this.isLoggedIn = false;
    },
  },
});
```

在这个示例中，我们定义了一个名为 `useUserStore` 的状态管理器。我们指定了一个命名空间 `user`，然后定义了两个状态：`user` 用于存储用户信息，`isLoggedIn` 用于表示用户是否已登录。接着，我们定义了两个操作：`login` 用于登录用户并更新状态，`logout` 用于注销用户并更新状态。

### 2. 在组件中使用状态：

一旦定义了状态管理器，你就可以在你的组件中使用它。下面是一个简单的 Vue 组件示例，演示了如何在组件中使用 `useUserStore` 状态管理器中的状态和操作：

```vue
<template>
  <div>
    <!-- 显示用户信息或登录按钮 -->
    <div v-if="isLoggedIn">
      <p>Welcome, {{ user.name }}!</p>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <p>Please login:</p>
      <button @click="login({ name: 'John' })">Login as John</button>
    </div>
  </div>
</template>

<script>
import { useUserStore } from './store';

export default {
  setup() {
    // 获取 UserStore 实例
    const userStore = useUserStore();

    // 从状态管理器中获取需要的状态和操作
    const { user, isLoggedIn, login, logout } = userStore;

    return {
      user,
      isLoggedIn,
      login,
      logout,
    };
  },
};
</script>
```

在这个组件中，我们首先导入了 `useUserStore` 函数来获取 `UserStore` 的实例。然后，我们从实例中获取了 `user`、`isLoggedIn`，以及 `login` 和 `logout` 操作。最后，我们在模板中使用这些状态和操作来显示用户信息或登录按钮，并添加相应的事件处理程序。

2. 使用 `getters` 和 `setters`
当你需要在状态管理器中定义一些派生状态或对状态进行一些逻辑处理时，你可以使用 `getters` 和 `setters`。让我们扩展之前的计数器示例，添加一个 `doubleCount` 的 `getter` 来获取计数器的两倍值，并且使用一个 `setCount` 的 `setter` 来设置计数器的值：

```javascript
import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  getters: {
    // 获取计数器的两倍值
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    reset() {
      this.count = 0;
    },
  },
  // 设置计数器的值
  setters: {
    setCount(newValue) {
      this.count = newValue;
    },
  },
});
```

现在我们已经添加了一个 `doubleCount` 的 `getter` 和一个 `setCount` 的 `setter`。现在让我们在组件中使用它们：

```vue
<template>
  <div>
    <p>Count: {{ counter }}</p>
    <p>Double Count: {{ doubleCounter }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
    <input type="number" v-model.number="newCount" />
    <button @click="updateCount">Set Count</button>
  </div>
</template>

<script>
import { useCounterStore } from './store';

export default {
  setup() {
    const counterStore = useCounterStore();

    // 获取计数器的值和两倍值
    const counter = counterStore.count;
    const doubleCounter = counterStore.doubleCount;

    // 设置计数器的新值
    let newCount = counter;
    const updateCount = () => {
      counterStore.setCount(newCount);
    };

    return {
      counter,
      doubleCounter,
      newCount,
      updateCount,
      increment: counterStore.increment,
      decrement: counterStore.decrement,
      reset: counterStore.reset,
    };
  },
};
</script>
```

现在，我们在组件中可以使用 `doubleCount` 的 `getter` 获取计数器的两倍值，并且使用 `setCount` 的 `setter` 来设置计数器的值。
3. 状态的持久性

在 Pinia 中实现状态的持久性通常涉及将状态保存到本地存储（如 localStorage）或者使用服务器端的存储（如数据库）。这里我将介绍如何在 Pinia 中使用 localStorage 实现状态的持久性。

首先，确保你已经安装了 Pinia，并且已经设置了你的状态管理器（如果没有，请先安装和设置）。

### 使用 localStorage 实现状态的持久性

1. 安装 Pinia

   ```bash
   npm install pinia@next
   ```

2. 设置状态管理器

   在你的代码中设置状态管理器，并确保在其中包含你需要持久化的状态和相应的操作。

   ```javascript
   import { defineStore } from 'pinia';

   export const useCounterStore = defineStore({
     id: 'counter',
     state: () => ({
       count: parseInt(localStorage.getItem('count')) || 0, // 从 localStorage 加载计数器的值
     }),
     getters: {
       // 定义 getter 和 setter
     },
     actions: {
       // 定义 actions
     },
   });
   ```

3. 添加保存状态到 localStorage 的逻辑

   在需要保存状态的地方，比如在操作中，添加保存到 localStorage 的逻辑。

   ```javascript
   import { useCounterStore } from './store';

   export default {
     setup() {
       const counterStore = useCounterStore();

       // 增加计数器的逻辑
       const increment = () => {
         counterStore.count++;
         localStorage.setItem('count', counterStore.count.toString()); // 保存计数器的值到 localStorage
       };

       return {
         count: counterStore.count,
         increment,
       };
     },
   };
   ```

现在，每次更新计数器时都会将其值保存到 localStorage 中。当你重新加载应用程序时，可以从 localStorage 中加载之前保存的值，实现状态的持久性。

请注意，localStorage 有一些限制和注意事项，比如数据存储在客户端、容量限制等。对于更复杂的应用或需要跨设备同步的情况，你可能需要考虑使用其他持久化方式，比如数据库或服务器端存储。

## 操作和异步处理
在 Pinia 中，你可以使用操作（actions）来执行异步处理。操作是 store 中的一种特殊函数，通常用于处理异步逻辑、发起 API 请求、或者执行其他需要时间的操作。下面是如何在 Pinia 中定义操作和处理异步逻辑的示例：

```javascript
import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  getters: {
    // 定义 getter
  },
  actions: {
    // 定义操作
    async incrementAsync() {
      // 模拟异步操作
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 执行操作
      this.count++;
    },
  },
});
```

在上面的示例中，我们定义了一个名为 `incrementAsync` 的异步操作。这个操作会等待 1 秒钟（模拟异步操作），然后增加计数器的值。

在组件中使用操作可以像这样：

```javascript
import { useCounterStore } from './store';

export default {
  setup() {
    const counterStore = useCounterStore();

    // 调用异步操作
    const handleIncrementAsync = async () => {
      await counterStore.incrementAsync();
    };

    return {
      count: counterStore.count,
      handleIncrementAsync,
    };
  },
};
```

在组件中，我们通过调用 `incrementAsync` 操作来执行异步逻辑。在实际应用中，你可以在操作中执行 API 请求、异步任务、或者其他需要时间的操作。

需要注意的是，操作默认是异步的，因此不需要额外的处理来使其成为异步操作。Pinia 会自动处理异步操作，并在完成后更新状态。

## 模块化
将状态和操作模块化是一种很好的做法，它可以使代码更清晰、易于维护和重用。在 Pinia 中，你可以将状态和操作分别定义在不同的模块中，并在需要的地方导入和使用它们。下面是一个示例：

### 创建状态模块

```javascript
// counterModule.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  getters: {
    // 定义 getter
  },
});
```

### 创建操作模块

```javascript
// counterActions.js
import { useCounterStore } from './counterModule';

export const useCounterActions = () => {
  const counterStore = useCounterStore();

  const incrementAsync = async () => {
    // 模拟异步操作
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // 执行操作
    counterStore.count++;
  };

  return {
    incrementAsync,
  };
};
```

### 在组件中使用状态和操作

```javascript
import { useCounterStore } from './counterModule';
import { useCounterActions } from './counterActions';

export default {
  setup() {
    const counterStore = useCounterStore();
    const { incrementAsync } = useCounterActions();

    const handleIncrementAsync = async () => {
      await incrementAsync();
    };

    return {
      count: counterStore.count,
      handleIncrementAsync,
    };
  },
};
```

通过这种方式，状态和操作被封装在不同的模块中，使代码更具可读性和可维护性。如果你的应用变得更加复杂，你可以轻松地添加更多的状态模块和操作模块，并在需要时组合它们。

## 插件和中间件
1. 安装和使用插件

在 Pinia 中安装和使用插件非常简单。你可以使用 `usePlugin` 函数来安装插件，然后在 `defineStore` 中配置它。以下是一些示例代码：

### 安装插件

```bash
npm install pinia-plugin-logger
```

### 在 store 中使用插件

```javascript
import { defineStore, usePlugin } from 'pinia';
import { loggerPlugin } from 'pinia-plugin-logger';

// 安装插件
usePlugin(loggerPlugin);

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  getters: {
    // 定义 getter
  },
  actions: {
    // 定义操作
    async incrementAsync() {
      // 模拟异步操作
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 执行操作
      this.count++;
    },
  },
});
```

### 在组件中使用插件

```javascript
import { useCounterStore } from './store';

export default {
  setup() {
    const counterStore = useCounterStore();

    // 使用插件输出日志
    console.log('Counter Value:', counterStore.count);

    return {
      count: counterStore.count,
    };
  },
};
```

在上面的示例中，我们安装了一个名为 `pinia-plugin-logger` 的插件，并在 store 中使用了它。这个插件会在控制台输出状态变化的日志，帮助我们调试和跟踪状态的变化。在组件中，我们直接使用 `console.log` 来输出状态的值，而不需要自己手动监听状态的变化。

2. 创建和使用中间件


在 Pinia 中，你可以使用中间件来拦截和处理 store 的状态变化、操作调用等。这使得你可以在应用中添加各种功能，例如日志记录、错误处理、权限验证等。以下是如何创建和使用中间件的示例：

### 创建中间件

```javascript
// middleware.js
export const myMiddleware = (store) => {
  // 在这里添加你的中间件逻辑

  // 返回一个对象，包含需要暴露给 store 的方法
  return {
    // 在操作调用之前执行的中间件逻辑
    beforeAction(actionName, payload) {
      console.log(`Before action ${actionName} with payload:`, payload);
    },

    // 在状态变化之前执行的中间件逻辑
    beforeMutation(mutationName, payload) {
      console.log(`Before mutation ${mutationName} with payload:`, payload);
    },
  };
};
```

### 在 store 中使用中间件

```javascript
import { defineStore, createPinia } from 'pinia';
import { myMiddleware } from './middleware';

// 创建 Pinia 实例
const pinia = createPinia();

// 使用中间件
pinia.use(myMiddleware);

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  getters: {
    // 定义 getter
  },
  actions: {
    // 定义操作
    async incrementAsync() {
      // 模拟异步操作
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // 执行操作
      this.count++;
    },
  },
});
```

### 在组件中使用 store

```javascript
import { useCounterStore } from './store';

export default {
  setup() {
    const counterStore = useCounterStore();

    // 调用操作
    const handleClick = () => {
      counterStore.incrementAsync();
    };

    return {
      count: counterStore.count,
      handleClick,
    };
  },
};
```

在上面的示例中，我们创建了一个名为 `myMiddleware` 的中间件，它包含了在操作调用之前和状态变化之前执行的中间件逻辑。然后，我们在 store 中使用 `pinia.use()` 方法来注册中间件。最后，在组件中通过 `useCounterStore()` 来使用 store，并且中间件会自动拦截操作调用和状态变化，并执行相应的逻辑。
