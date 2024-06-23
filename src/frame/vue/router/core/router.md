---
title: vue-router
description:  vue-router
keywords:  vue-router
category:
  - Web
  - 路由
tag: vue-router
---

## 介绍

Vue Router 是 Vue.js 官方的路由管理器。它与 Vue.js 的核心深度集成，允许你构建具有复杂页面导航需求的单页应用（SPA）。

## 什么是路由

在 SPA 中，路由是指应用中不同页面间的切换和导航。Vue Router 提供了一种基于 URL 的导航方式，通过管理路由状态，实现页面间的无刷新切换。

## 基础

### 创建第一个应用

Vue Router是Vue.js官方的路由管理器。它允许我们在Vue应用中建立单页面应用（SPA）的路由。

创建第一个应用的步骤如下：

1. 安装Vue Router：在终端中执行以下命令以安装Vue Router。

```bash
npm install vue-router
```

2. 创建路由器实例：在main.js或者你的入口文件中，引入Vue和Vue Router，并创建一个路由器实例。

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: []
})
```

3. 创建页面组件：创建一些用于展示内容的页面组件。例如，我们有一个名为Home的组件。

```javascript
// Home.vue

<template>
  <div>
    <h1>首页</h1>
    <p>这是主页的内容。</p>
  </div>
</template>
```

4. 配置路由：在路由器实例的routes选项中，配置路由信息和对应的组件。

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
/**
 * path:url路径
 * name:路由别名
 * component: 组件
 * */
```

5. 添加路由视图：在Vue应用的模板中，添加`<router-view>`标签作为路由视图的占位符。

```html
// App.vue

<template>
  <div id="app">
    <router-view></router-view>
    <!--  将显示与 url 对应的组件 -->
  </div>
</template>
```

6. 注册路由器实例：在Vue实例中，注册路由器实例。

```javascript
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

7. 运行应用：在终端中执行以下命令以运行Vue应用。

```bash
npm run serve
```

现在，你的第一个Vue Router应用已经创建完成了！你可以在浏览器中访问应用，看到主页的内容。

## 动态路由

动态路由是指在Vue框架中，可以根据特定的条件或参数来动态生成路由。通过使用动态路由，我们可以根据不同的需求，在不同的路由中展示不同的内容或组件。

下面是一个简单的示例，演示如何在Vue中使用动态路由：

1. 在Vue项目的路由配置文件（通常是router.js）中，首先导入Vue和VueRouter：

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'
```

2. 定义路由组件，在这个示例中，我们定义了两个组件：Home和About

```javascript
const Home = { template: '<div>这是首页组件</div>' }
const About = { template: '<div>这是关于页面组件</div>' }
```

3. 创建VueRouter实例，并定义路由规则。在这个例子中，我们定义了两个路由规则：一个是根路径'/'对应Home组件，另一个是'/about'路径对应About组件。

```javascript
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})
```

4. 在Vue实例中，使用router实例，并将其传递给Vue实例配置项中的router属性。

```javascript
new Vue({
  router
}).$mount('#app')
```

5. 在Vue项目的模板文件中，使用`<router-link>`来生成路由链接，使用`<router-view>`来展示路由组件。在这个例子中，我们在模板中添加了两个路由链接，分别对应根路径和'/about'路径。

```html
<div id="app">
  <!-- 类似于a标签 通过to去实现跳转 -->
  <router-link to="/">首页</router-link>
  <router-link to="/about">关于</router-link>
  <router-view></router-view>
</div>
```

通过上述步骤，我们就可以在Vue项目中使用动态路由了。当用户点击不同的路由链接时，对应的组件会被动态加载和展示。这样，我们就可以根据不同的路由路径来展示不同的内容。

在组件中，可以通过`$router`和`$route`去获取路由的信息

## 路由的匹配规则

路由的匹配规则是基于路径的，可以根据路径匹配到不同的组件。Vue路由使用路由器（Router）来管理应用程序的路由状态。当用户访问不同的路径时，路由器会根据定义的路由规则找到匹配的组件，并将其渲染到指定的路由出口（Router-View）中。

下面是Vue路由匹配规则的详细解释：

1. 基本匹配规则：
   - 硬编码路径：可以通过直接指定路径来实现匹配，例如 `path: '/home'`。
   - 带有参数的动态路径片段：可以通过使用冒号前缀来定义动态路径，例如 `path: '/user/:id'`，其中`:id`是一个参数，路由器可以根据该参数的值匹配到对应的组件。
   - 带有通配符的路径：使用`*`通配符可以匹配任意路径，例如 `path: '*'`。

2. 路由匹配优先级：
   - 路由定义的顺序决定了匹配的优先级。首先匹配到的路由会被渲染到路由出口中，后面的路由不会再进行匹配。
   - 配置了带有参数的动态路径片段的路由会优先匹配，例如 `/user/:id`会比`/user/profile`优先匹配。
   - 路由的优先级越高，应该越早定义，以确保正确匹配到预期的组件。

3. 嵌套路由：
   - 路由可以通过嵌套来实现多层级的组件嵌套渲染，例如创建子路由。
   - 子路由需要在父级路由的组件中定义一个路由出口，用于渲染子路由的组件。

总结：
Vue路由使用路径匹配规则来根据用户访问的路径找到对应的组件。路由匹配规则包括硬编码路径、带有参数的动态路径片段和通配符路径。路由的优先级由路由定义的顺序决定，高优先级的路由会优先匹配。此外，可以通过嵌套路由实现多层级的组件嵌套渲染。

## 嵌套路由

嵌套路由是指在Vue.js中，可以在一个路由中通过配置子路由来实现对应页面的嵌套和组织。这样可以将一个页面分割为多个小组件，使代码结构更清晰、可维护性更高。

在Vue.js中，使用Vue Router来管理路由。我们可以通过在VueRouter实例中的routes配置项来定义路由。对于嵌套路由，我们可以在一个路由配置的子项中再次配置路由，形成嵌套的结构。

下面是一个简单的示例，演示如何在Vue.js中使用嵌套路由：

```javascript
// main.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

// 导入子组件
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Profile from './components/Profile.vue'
import Settings from './components/Settings.vue'

Vue.use(VueRouter)

// 定义路由配置
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/profile',
    component: Profile,
    children: [
      {
        path: 'settings', // 注意这里的路径没有斜杠"/"
        component: Settings
      }
    ]
  }
]

// 创建路由实例
const router = new VueRouter({
  routes
})

// 创建Vue实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```

在上述示例代码中，我们定义了四个路由，分别是`Home`、`About`、`Contact`、`Profile`。其中，`Profile`路由下又定义了一个子路由`Settings`。

在`Profile`组件的模板中，我们可以使用`<router-view></router-view>`来渲染嵌套的子路由。当访问`/profile/settings`时，`Settings`组件将会被渲染在`Profile`组件的视图中。

```html
<!-- Profile.vue -->
<template>
  <div>
    <h2>Profile</h2>
    <router-view></router-view>
  </div>
</template>
```

子路由的路径（如`/settings`）不需要以斜杠"/"开头，因为它是相对于父路由的路径。同时，在父路由组件的模板中，使用`<router-view>`标签进行嵌套路由的渲染。

通过以上的配置，我们就可以在Vue.js中使用嵌套路由了。当访问`/profile/settings`路径时，将会渲染`Settings`组件，并嵌套在`Profile`组件的视图中。

希望以上的回答对您有帮助，如有任何疑问，请随时提问。

## 编程式导航

编程式导航是Vue.js框架提供的一种导航方式，可以通过编写JavaScript代码来实现页面的跳转和导航。

1. 编程式导航的方法：Vue Router提供了一组方法，可以用于在JavaScript代码中实现页面的跳转和导航。常用的方法包括：

   - `router.push(location)`：用于在代码中实现页面的正常跳转，类似于用户点击链接或者输入网址进行跳转。
   - `router.replace(location)`：用于在代码中替换当前页面的URL，而不会产生新的历史记录。通常用于实现一些需要重定向或者替换当前URL的场景。
   - `router.go(n)`：用于在代码中前进或后退n个步骤，类似于浏览器的前进和后退操作。

2. 编程式导航的参数：上述方法中的`location`参数可以是一个URL字符串，也可以是一个描述目标位置的对象。常用的参数包括：

   - `path`：指定目标页面的路径。
   - `params`：指定目标页面的路由参数，例如`/user/:id`中的`:id`。
   - `query`：指定目标页面的查询参数，例如`/user?id=123`中的`id`。
   - `hash`：指定目标页面的哈希值。

3. 编程式导航的实践：在Vue组件的方法中，可以通过`this.$router`来获取路由对象，从而调用编程式导航的方法。例如：

   ```js
   export default {
     methods: {
       goToHome() {
         this.$router.push('/home');
       },
       goToUser(id) {
         this.$router.push({ path: '/user', params: { id } });
       }
     }
   }
   ```

   上述代码演示了在方法中使用编程式导航的两种常见方式，分别是直接跳转到`/home`路径和携带参数跳转到`/user/:id`路径。

编程式导航仅仅是改变了URL地址，并不会重新加载整个页面，而是通过动态改变Vue组件来展示新的页面内容。这种方式可以实现无刷新的页面切换，提升用户的体验。

## 命名路由和视图

1. 命名路由

命名路由是用来给路由配置一个名称，以便在代码中可以直接通过名称来导航到对应的路由。这样可以避免直接依赖路径的方式进行路由跳转，提高了代码的可维护性和可读性。

在Vue中，通过`routes`选项来配置路由，每个路由对象可以指定一个`name`属性，用来给路由命名。下面是一个简单的例子：

```javascript
// 路由配置
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
});

// 在代码中通过名称导航
router.push({ name: 'home' }); // 导航到home路由
router.push({ name: 'about' }); // 导航到about路由
```

在上面的例子中，home和about分别是两个路由对象的名称，可以通过`router.push({ name: 'xxx' })`的方式来导航到对应的路由。

使用命名路由的好处是，当路由的定义发生变化时，例如修改了路径，只需要在路由配置中修改相应路由对象的path，而不需要在整个项目中修改依赖该路径的代码。这样可以避免一些不必要的代码修改和维护成本。同时，通过名称导航也更加直观和方便，提高了开发效率。

命名路由只是一种方便的开发方式，并不是必须的，可以根据项目的实际需求进行选择是否使用。

2. 命名视图

命名视图是一种在路由中定义多个同级视图的方式。通过使用命名视图，我们可以在同一个页面中同时展示多个视图，并且可以通过路由配置来管理每个视图的加载和展示。

在Vue中，我们可以使用以下方式定义命名视图：

- 在路由配置中通过`components`属性来定义命名视图：

```javascript
const routes = [
  {
    path: '/',
    components: {
      default: HomeComponent,      // 默认视图
      sidebar: SidebarComponent,    // 侧边栏视图
      header: HeaderComponent       // 头部视图
    }
  },
  // 其他路由配置...
]
```

我们定义了一个根路径为`/`的路由，并通过`components`属性指定了三个命名视图：`default`、`sidebar`和`header`。对应的组件分别是`HomeComponent`、`SidebarComponent`和`HeaderComponent`。

- 在路由配置中通过`name`属性来定义命名视图：

```javascript
const routes = [
  {
    path: '/',
    component: HomeComponent,
    children: [
      {
        path: 'sidebar',
        components: {
          default: SidebarComponent,   // 默认视图
          header: HeaderComponent      // 头部视图
        }
      }
    ]
  },
  // 其他路由配置...
]
```

我们定义了一个根路径为`/`的路由，并在其子路由配置中通过`components`属性指定了两个命名视图：`default`和`header`。对应的组件分别是`SidebarComponent`和`HeaderComponent`。

通过以上的配置，我们可以在页面中同时显示多个视图。在Vue模板中，可以通过指定`name`来加载对应的命名视图：

```html
<template>
  <div>
    <router-view></router-view>          <!-- 默认视图 -->
    <router-view name="sidebar"></router-view>   <!-- 侧边栏视图 -->
    <router-view name="header"></router-view>    <!-- 头部视图 -->
  </div>
</template>
```

## 重定向

路由重定向来导航到指定的路径。要使用路由重定向，你需要在Vue路由的配置中定义一个重定向路由。

一个示例，展示如何使用路由重定向：

``` js
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home' // 设置默认重定向至'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router;

```

我们设置了默认重定向路径为/home，这意味着当进入网站的根路径时，会自动跳转到/home。

你可以根据需求设置任意的重定向路径。在routes数组中，如果某个路由对象的redirect属性的值不为空，则表示该路由需要重定向到指定路径。

## 路由别名

路由别名是指使用alias字段来为某个路由路径设置一个别名。这样当访问别名路径时，实际上是访问的原始路径。

在 Vue Router 中使用路由别名有两种方式：

使用alias选项
示例代码：

```javascript
const routes = [
  {
    path: '/original',
    component: OriginalComponent,
    alias: '/alias' // 设置别名
  }
]

```

示例代码：

```javascript
const routes = [
  {
    path: '/original',
    components: {
      default: OriginalComponent,
      alias: OriginalComponent // 设置别名
    }
  }
]

```

## 路由组件传参

可以使用路由组件传参。详细的步骤和例子：

1. 首先，我们需要在路由配置文件(通常是`router/index.js`)中定义一个路由，并使用`props`属性来接收参数。例如，我们可以定义一个名为`User`的路由，它接收一个名为`id`的参数：

```javascript
import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/:id',
      name: 'User',
      component: User,
      props: true // 开启props模式
    }
  ]
})
```

2. 然后，在`User`组件中，我们可以通过`$route.params`来获取传递的参数。例如，我们可以在`User`组件的模板中显示用户的ID:

```html
<template>
  <div>
    <h1>用户ID:{{ id }}</h1>
  </div>
</template>
```

3. 最后，在需要跳转到`User`组件的地方，我们可以使用`router-link`或者编程式导航来传递参数。例如，我们可以在`App.vue`组件中为一个按钮添加点击事件，当点击按钮时，跳转到用户详情页面，并传递用户的ID:

```html
<template>
  <div id="app">
    <button @click="goToUser">查看用户详情</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToUser() {
      const id = 1 // 这里可以根据实际情况获取用户的ID
      this.$router.push({ name: 'User', params: { id } })
    }
  }
}
</script>
```

这样，当我们点击“查看用户详情”按钮时，就会跳转到用户详情页面，并显示用户的ID。

## 路由守卫

1. 前置路由守卫(`beforeEach`): 全局前置守卫会在路由切换之前被调用，常用于身份验证、权限控制等逻辑的处理。

```js
router.beforeEach((to, from, next) => {
  // ...
  /**
   * to: 跳转的路径
   * from: 离开的路由
   * next(false): 阻止导航
   * next(path): 跳转到指定路径
   * next(): 跳转到下一个钩子
   * next(error): 处理错误
   *
   */
  next()
})
```

2. 全局后置守卫(`afterEach`): 全局后置守卫会在每次路由切换之后被调用，常用于一些全局状态的更新，例如更新页面标题、更新当前选中的菜单等。

```js
router.afterEach((to, from) => {
  // ...
})
```

3. 路由独享守卫(`beforeEnter`): 路由独享守卫会在路由切换之前被调用，常用于一些局部状态的更新，例如更新当前选中的菜单等。

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id',
      component: User,
      beforeEnter(to, from, next) {
        // ...
        next()
      }
    }
  ]
})
```

4. 组件内的路由守卫(`beforeRouteEnter`、`beforeRouteUpdate`、`beforeRouteLeave`): 组件内的路由守卫会在路由切换之前被调用，常用于一些局部状态的更新，例如更新当前选中的菜单等。

```vue
<template>
 <div>
   <h1>{{ $route.params.id }}</h1>
   <router-link to="/">Home</router-link>
   <router-link to="/about">About</router-link>
 </div>
</template>

<script>
export default {
 beforeEnter(to, from, next) {
   // 在这里添加一些逻辑，例如检查用户是否已登录
   if (!isLoggedIn) {
     next({ name: 'Login' });
   } else {
     next();
   }
 },
 beforeRouteEnter(to, from, next) {
   // 在这里添加一些逻辑，例如检查路由参数是否有效
   if (!isValidId(to.params.id)) {
     next({ name: 'Home' });
   } else {
     next();
   }
 },
 beforeRouteUpdate(to, from, next) {
   // 在这里添加一些逻辑，例如检查路由参数是否已更新
   if (to.params.id !== from.params.id) {
     // 如果路由参数已更新，可以在这里执行一些操作，例如获取新数据
   }
   next();
 },
 beforeRouteLeave(to, from, next) {
   // 在这里添加一些逻辑，例如检查用户是否已确认离开页面
   if (!confirmedLeave) {
     next(false);
   } else {
     next();
   }
 },
 beforeDestroy() {
   // 在这里添加一些逻辑，例如清除一些资源，例如定时器
 },
 destroyed() {
   // 在这里添加一些逻辑，例如清除一些资源，例如定时器
 },
};
</script>
```

## 路由元信息

路由元数据（metadata）是一种在路由中添加额外信息的方式。这些信息可以用于在导航过程中执行一些特殊操作，例如在渲染组件之前设置一些状态。要添加路由元数据，可以在路由对象中使用 meta 属性。

一个简单的示例，展示了如何在 Vue 中使用路由元数据：

```vue
<template>
<div>
  <h1>{{ $route.params.id }}</h1>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
</div>
</template>

<script>
export default {
 data() {
   return {
     isLoggedIn: false,
   };
 },
 metaInfo() {
   return {
     title: `Title: ${this.$route.params.id}`,
   };
 },
};
</script>
```

在这个示例中，我们使用 `metaInfo` 方法返回一个包含路由元数据的对象。在这个例子中，我们返回了一个包含页面标题的对象。在组件中，我们可以通过 `this.$route.meta.title`访问这个元数据。

## 路由懒加载

路由懒加载（Lazy Loading）是一种优化技术，用于按需加载路由组件，而不是一次性加载所有路由组件。这样可以减少首次加载的时间，并提升应用的性能。

在 Vue Router 中，可以使用动态`import()`语法来实现路由懒加载。它允许将路由组件定义为一个返回组件的函数，在需要时才会进行异步加载。

示例：

```js
const routes = [
  {
    path: '/home',
    component: () => import('./components/HomeComponent.vue') // 路由懒加载
  },
  {
    path: '/about',
    component: () => import('./components/AboutComponent.vue') // 路由懒加载
  },
  // ...
];

```

在上面的例子中，`import()`函数会在访问对应路由时动态地异步加载路由组件。这样就可以将路由组件打包成单独的文件，并在需要时按需加载，而不是一次性加载所有路由组件。

当使用路由懒加载时，产生的每个可被导航到的路由都会生成一个单独的异步块（chunk）。这将导致在首次访问该路由之前，将发起一个异步请求来获取该块，因此会有一个短暂的延迟。