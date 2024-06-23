---
title: react-router
description:  react-router
keywords:  react-router
category:
  - 框架
  - react-router
  - Web
tag: react-router
---

## 概念

React Router 是一个用于构建单页应用的声明式路由库。它允许你通过将组件与 URL 相关联来构建一个动态的 UI。React Router 提供了一些组件和 API，用于创建和管理路由，以及导航用户从一个 URL 到另一个 URL。

## 安装React Router

可以使用npm或yarn来安装React Router。在终端中运行以下命令：`npm install react-router-dom` 或 `yarn add react-router-dom`

## 路由器（Router）组件

在应用程序的最顶层，需要将`<BrowserRouter>`或`<HashRouter>`作为根组件进行包裹。`BrowserRouter`使用浏览器的HTML5 history API，而`HashRouter`使用URL的哈希值。例如：

   ```jsx
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

   function App() {
     return (
       <Router>
         {/* 路由组件 */}
       </Router>
     );
   }
   ```

## 路由（Route）组件

用于定义路径与组件之间的关联关系。例如，当访问路径`/home`时，显示`Home`组件：

   ```jsx
<Route path="/home" component={Home} />
   ```

## Switch组件

用于将多个`<Route>`组件包裹在一起，只渲染匹配的第一个路由组件。这对于避免多个路由同时匹配的问题非常有用。例如：

   ```jsx
<Switch>
  <Route exact path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/contact" component={Contact} />
  <Route component={NotFound} /> {/* 所有未匹配的路径都会显示NotFound组件 */}
</Switch>
   ```

## 嵌套路由（Nested Routes）

React Router允许使用嵌套路由，以便在组件层次结构中创建多个级别的路由。例如：

   ```jsx
<Route path="/users" component={Users}>
  <Route path="/users/:id" component={UserProfile} />
  <Route path="/users/:id/posts" component={UserPosts} />
</Route>
   ```

## 跳转（Navigation）

React Router提供了`<Link>`和`<NavLink>`组件用于在应用程序中进行导航。`<Link>`组件用于一般性的导航，而`<NavLink>`组件用于在当前路由与导航路径匹配时添加样式。例如：

   ```jsx
   import { Link, NavLink } from 'react-router-dom';

   function Navigation() {
     return (
       <nav>
         <ul>
           <li>
             <Link to="/home">Home</Link>
           </li>
           <li>
             <NavLink to="/about" activeClassName="active">About</NavLink>
           </li>
           <li>
             <NavLink to="/contact" activeClassName="active">Contact</NavLink>
           </li>
         </ul>
       </nav>
     );
   }
   ```

## 带参数的路由（Route Parameters）

React Router允许在路由中使用动态参数，这对于根据特定参数显示不同内容非常有用。例如：

   ```jsx
<Route path="/users/:id" component={UserProfile} />
   ```

## 重定向路由

Redirect 组件用于在路由匹配失败时进行重定向。可以在需要进行条件判断并跳转的情况下使用 Redirect 组件。

```jsx
<Route path="/">
  <Redirect to="/home" />
</Route>

```

## 编程式导航（Programmatic Navigation）

React Router提供了一些方法，可以通过代码进行导航，而不是手动点击导航链接。例如，可以在组件中使用`history`对象进行导航:

   ```jsx
   import { useHistory } from 'react-router-dom';

   function MyComponent() {
     const history = useHistory();

     function handleClick() {
       history.push('/new-route');
     }

     return (
       <button onClick={handleClick}>Go to New Route</button>
     );
   }
   ```

## 带有历史记录的跳转

可以使用浏览器的历史记录API进行路由跳转，并保持正确的URL历史记录。

下面是如何在 react-router5 中实现带有历史记录的跳转的详细步骤：

首先，确保你已经安装了 react-router 和相关的依赖。你可以使用 npm 或 yarn 进行安装：

```bash
npm install react-router@5 history
```

创建一个 Router 组件，用于定义应用的路由和导航。在这个组件中，你可以使用 `<Route>` 组件来定义每个路由，并指定它们对应的组件。

```jsx
import React from 'react';
import { Router, Route } from 'react-router5';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const router = new Router();

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about', component: About },
  { name: 'contact', path: '/contact', component: Contact },
];

router.add(routes);

const App = () => {
  return (
    <Router router={router}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

```

在主组件中，使用 `<Link>` 组件来创建导航链接。该组件会自动为你添加相应的点击事件，以便在点击时触发路由跳转。

```jsx
import React from 'react';
import { Link } from 'react-router5';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link routeName="home">Home</Link>
        </li>
        <li>
          <Link routeName="about">About</Link>
        </li>
        <li>
          <Link routeName="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

```

在每个路由组件中，你可以使用 router 属性来访问路由器的功能，包括跳转和导航。

```jsx
import React from 'react';

const Home = ({ router }) => {
  const handleClick = () => {
    router.navigate('about');
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
};

```

这样，当点击按钮时，路由器将会使用历史记录对应的 navigate 方法进行跳转。这将触发页面的重新渲染，并显示 About 组件。

## 路由保护

可以配置保护某些路由，需要用户进行身份验证或其他权限验证才能访问。

在react-router5中实现路由保护可以通过以下几个步骤：

定义路由配置：在React组件中定义一个路由配置对象，包含需要进行保护的路由以及它们对应的组件。

```js
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/protected',
    name: 'Protected',
    component: Protected,
    protected: true // 标记该路由需要保护
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

```

创建一个高阶组件（HOC）来处理路由保护逻辑：

```jsx
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = checkAuth(); // 检查当前用户是否已认证

  // 根据用户认证状态进行路由渲染
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

```

在应用程序中使用路由配置和保护路由：

```jsx
<Router>
  <Switch>
    {routes.map((route, index) => {
      if (route.protected) {
        return <ProtectedRoute {...route} key={index} />;
      } else {
        return <Route {...route} key={index} />;
      }
    })}
  </Switch>
</Router>

```

上述代码中，我们通过ProtectedRoute高阶组件来包装需要保护的路由，并在路由渲染时根据用户认证状态决定渲染目标组件还是重定向到登录页面。

在认证逻辑中实现checkAuth函数：根据你的具体业务情况，编写一个函数来检查用户的认证状态。你可以将用户的认证信息存储在状态管理库（如Redux）中，或者通过其他方式进行判断。

## 路由参数传递

可以在路由之间传递参数，以便在不同组件之间共享数据。

1. 路由路径参数：
   在路由的路径中定义参数，然后将参数的值嵌入到 URL 中。在组件中可以通过 `useParams` 钩子或者 `withRouter` 高阶组件来获取参数的值。

   示例代码如下：

   ```jsx
   import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';

   function MyComponent() {
     const { id } = useParams();

     return (
       <div>
         <h1>路由参数: {id}</h1>
       </div>
     );
   }

   function App() {
     return (
       <BrowserRouter>
         <Switch>
           <Route path="/my-component/:id" component={MyComponent} />
         </Switch>
       </BrowserRouter>
     );
   }

   // 在 URL 中访问：/my-component/123
   // 输出：路由参数: 123
   ```

2. 查询参数：
   在 URL 中使用查询字符串来传递参数。可以使用 `useLocation` 钩子或者 `withRouter` 高阶组件来获取查询参数的值。

   示例代码如下：

   ```jsx
   import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';

   function MyComponent() {
     const location = useLocation();
     const params = new URLSearchParams(location.search);
     const id = params.get('id');

     return (
       <div>
         <h1>查询参数: {id}</h1>
       </div>
     );
   }

   function App() {
     return (
       <BrowserRouter>
         <Switch>
           <Route path="/my-component" component={MyComponent} />
         </Switch>
       </BrowserRouter>
     );
   }

   // 在 URL 中访问：/my-component?id=123
   // 输出：查询参数: 123
   ```

## 路由事件

可以监听和触发路由事件，以便在路由更改时执行自定义逻辑。

1. `history.listen(callback)`：当路由发生变化时触发回调函数。可以在回调函数中执行一些需要在路由变化时执行的操作。例如：

   ```jsx
   import { useHistory } from 'react-router-dom';

   function MyComponent() {
     const history = useHistory();

     useEffect(() => {
       const unlisten = history.listen((location, action) => {
         console.log('路由发生变化', location.pathname, action);
         // 执行其他操作
       });

       return () => {
         unlisten();
       };
     }, [history]);

     // ...

     return (
       // ...
     );
   }
   ```

2. `history.block(prompt)`：在路由切换前触发提示框，用于询问用户是否继续导航。`prompt`参数是一个函数，它接受一个`location`对象作为参数并返回一个字符串或`true`。如果返回一个字符串，将触发一个带有提示消息的确认框。例如：

   ```jsx
   import { useHistory } from 'react-router-dom';

   function MyComponent() {
     const history = useHistory();

     useEffect(() => {
       const unblock = history.block((location) => {
         if (location.pathname === '/protected') {
           return '确定要离开此页面吗?';
         }
         return true;
       });

       return () => {
         unblock();
       };
     }, [history]);

     // ...

     return (
       // ...
     );
   }
   ```

3. `Route`组件的`onEnter`和`onExit`属性：可以在`Route`组件中使用`onEnter`和`onExit`属性，指定在进入或离开路由时触发的回调函数。注意，这仅适用于`class`组件，不适用于函数式组件。例如：

   ```jsx
   import { Route } from 'react-router-dom';

   class MyComponent extends React.Component {
     handleEnter = () => {
       console.log('进入路由');
       // 执行其他操作
     }

     handleExit = () => {
       console.log('离开路由');
       // 执行其他操作
     }

     render() {
       return (
         <Route
           path="/my-route"
           component={MyRouteComponent}
           onEnter={this.handleEnter}
           onExit={this.handleExit}
         />
       );
     }
   }
   ```

# V6

## 基本用法

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

      {/* 路由匹配组件 */}
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
    </div>
  </Router>
);

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

export default App;
```

## 路由重定向

路由重定向可以通过使用 `<Routes>` 组件和 `<Route>` 组件的 `element` 属性来实现。一个使用重定向的示例：

```jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Navigate to="/dashboard/profile" />} />
        <Route path="/dashboard/profile" element={<Profile />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to the Home page!</h1>;
}

function Profile() {
  return <h1>Welcome to the Profile page!</h1>;
}

function Settings() {
  return <h1>Welcome to the Settings page!</h1>;
}

export default App;
```

在上面的例子中，当用户访问 "/dashboard" 路径时，会自动重定向到 "/dashboard/profile" 路径。这是通过 `<Navigate>` 组件实现的。

请注意，`<Routes>` 组件是在 react-router v6 中引入的新组件。它取代了 v5 中的 `<Switch>` 组件，并允许嵌套路由。`<Routes>` 组件可以包含多个 `<Route>` 组件，每个 `<Route>` 组件都可以通过 `element` 属性指定要渲染的组件。

除了重定向，还可以使用 `<Route>` 组件的 `render` 或 `children` 属性来动态渲染组件，具体取决于路由的匹配情况。这使得在控制台或用户权限验证等方面更加灵活。

## 路由模式

有三种路由模式可供选择：`BrowserRouter` 和 `MemoryRouter`、`HashRouter`。

1. `BrowserRouter`：常用于 Web 应用，使用 HTML5 的 history API 实现，可以在 URL 中使用正常的路径。

2. `MemoryRouter`：常用于非浏览器环境，例如 React Native 或 Electron，不会改变 URL，而是将路由信息保存在内存中。

3. `HashRouter`:用于 Web 浏览器中，当由于某种原因不应（或不能）将 URL 发送到服务器时

## 动态路由

动态路由可以通过使用 `<Route>` 组件的 `path` 属性来定义。下面是一个示例：

```javascript
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/user/:id" element={<User />} />
    </div>
  );
}

function User() {
  // 在这里可以通过 useParams() 钩子来获取动态路由参数
  const params = useParams();
  const userId = params.id;

  return (
    <div>
      <h1>User ID: {userId}</h1>
    </div>
  );
}
```

`<Route>` 组件的 `path` 属性是 `/user/:id`，其中的 `:id` 表示一个动态的路由参数。当用户访问 `/user/123` 这个路径时，`User` 组件会被渲染，并通过 `useParams()` 钩子获取到动态路由参数 `{ id: '123' }`。在 `User` 组件中，我们可以根据需要使用这个参数。

除了使用 `useParams()` 钩子来获取动态路由参数，React Router v6 还提供了其他一些钩子和函数，如 `useNavigate()` 用于跳转页面，`useLocation()` 用于获取当前路由信息等。

## 路由匹配

路由匹配是通过`<Routes>`组件来实现的。这个组件可以包含多个`<Route>`组件，每个`<Route>`定义了一个URL模式和对应的组件。

下面是一个例子来说明如何进行路由匹配：

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />}>
          <Route path="/" element={<UsersList />} />
          <Route path=":id" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
```

在上面的例子中，`<Routes>`包含了四个`<Route>`组件，它们定义了不同的URL模式和对应的组件。当URL匹配到某个模式时，对应的组件会被渲染到页面上。

- 第一个`<Route>`的路径是 "/"，代表默认的首页，当URL为根路径时，会渲染\<Home>组件。
- 第二个`<Route>`的路径是 "/about"，当URL为 "/about" 时，会渲染\<About>组件。
- 第三个`<Route>`的路径是 "/users"，当URL为 "/users" 时，会渲染\<Users>组件，并且该组件也定义了两个子路由。
- 子路由的路径可以使用相对路径，比如子路由的第一个路径是 "/"，它的完整路径是 "/users/"，当URL为 "/users/" 时，会渲染`<UsersList>`组件。
- 子路由的第二个路径是 ":id"，它是一个参数化路径，当URL为 "/users/1" 时，会渲染`<UserDetail>`组件，并且该组件可以通过`useParams()`来获取 ":id" 参数的值。
- 最后一个`<Route>`没有指定路径，它是一个通配符路由，当URL没有匹配到前面定义的任何路径时，会渲染`<NotFound>`组件。

## 路由跳转

1. 使用 `useNavigate` 钩子函数：在函数组件中使用 `useNavigate` 钩子函数可以获取到 `navigate` 函数，用于执行路由跳转。可以通过以下方式进行跳转：

```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/other-route'); // 跳转到 '/other-route'
  };

  return (
    <button onClick={handleClick}>跳转到其他路由</button>
  );
}
```

2. 使用 `Link` 组件：`Link` 组件是 React Router 提供的导航组件，用于在应用程序中创建链接。可以通过以下方式进行跳转：

```jsx
import { Link } from 'react-router-dom';

function MyComponent() {
  return (
    <Link to="/other-route">跳转到其他路由</Link>
  );
}
```

3. 使用 `NavLink` 组件：`NavLink` 组件是 `Link` 组件的扩展，用于创建带有样式的导航链接。可以通过以下方式进行跳转：

```jsx
import { NavLink } from 'react-router-dom';

function MyComponent() {
  return (
    <NavLink to="/other-route" activeClassName="active">跳转到其他路由</NavLink>
  );
}
```

1. 路由历史对象：
   在 React Router v6 中，路由历史对象是一个没有 state 和 action 的简单对象，你可以通过 `useNavigate` 钩子函数来访问它。`useNavigate` 返回了一个函数，你可以通过调用这个函数来进行导航。例如：

```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/new-page');
  }

  return <button onClick={handleClick}>Go to New Page</button>;
}
```

2. 导航到新页面：
   在 React Router v6 中，你可以直接调用 `navigate` 函数来导航到新页面。你只需要传递目标页面的路径作为参数。例如，`navigate('/new-page')` 将会导航到名为 `new-page` 的页面。

3. 替换路由：
   React Router v6 还引入了一个新的 `replace` 选项，它允许你执行一个替换而不是添加一个新的路由到历史记录中。例如，`navigate('/new-page', { replace: true })` 将会替换当前的路由而不是添加一个新的历史记录。

4. 跳转到上一个页面：
   React Router v6 通过 `useNavigate` 钩子函数提供了一个 `goBack` 方法来实现返回上一个页面的功能。你只需要在点击事件中调用 `goBack` 方法即可。例如：

```jsx
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return <button onClick={handleGoBack}>Go Back</button>;
}
```

注意，在 React Router v6 中，`goBack` 方法接受一个数字作为参数，表示你要回退的步数。`-1` 表示回退到上一个页面，`-2` 表示回退到上上个页面，依此类推。

## 路由高亮

路由高亮功能可以通过使用 `useRoutes` 钩子函数和 `NavLink` 组件来完成。

首先，我们需要安装 react-router-dom 包，它是 React Router 库的一部分，提供了在 Web 应用中进行路由导航的功能。

```bash
npm install react-router-dom
```

接下来，我们可以在应用的根组件中定义路由。在 React Router v6 中，路由规则被定义为一个路由配置对象，我们可以使用对象字面量来创建它。在这个配置对象中，我们可以定义一组路由规则，以及每个规则对应的组件。

```javascript
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}
```

在上面的代码中，我们使用 `NavLink` 组件来创建导航链接。`to` 属性定义了链接的目标路径。`end` 属性表示只有当链接的路径和当前路径完全匹配时，链接才会被激活。

在 `Routes` 组件内部，我们使用 `Route` 组件来定义每个路由规则。`path` 属性定义了路由匹配的路径，`element` 属性指定了匹配成功后应该渲染的组件。

最后，我们需要在应用的入口点渲染 App 组件。

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

这样就完成了基本的路由配置和导航链接的设置。当用户点击导航链接时，React Router v6 会根据路由规则进行匹配，并渲染对应的组件。同时，激活的导航链接会自动添加一个类名为 `active`，可以通过 CSS 样式来进行高亮显示。

## 路由过渡

react-router v6引入了一些新的特性和变化，其中一个重要的改变是路由过渡的处理方式。在v6中，React Router提供了一种更加灵活和强大的方式来处理路由过渡。

1. 组件式过渡：在v6中，过渡效果可以通过在路由组件之间进行淡入淡出、滑动或其他类型的过渡来实现。我们可以使用React的过渡库（例如React Transition Group）来实现这些效果。通过在路由组件之间结合使用过渡库和css动画，可以实现更加复杂和灵活的过渡效果。

2. 路由状态管理：v6中的Route组件具有一种新的特性，可以通过路由状态管理器来控制路由过渡。通过使用类似于useState的钩子（useMatches）和钩子（useLocation）来访问当前的路由状态，我们可以监视路由的变化并根据需要执行过渡操作。这使得我们可以更好地控制路由过渡，并根据路由变化自定义过渡效果。

3. 过渡组件：除了在路由组件之间实现过渡效果外，v6还引入了过渡组件（Transition）来更方便地实现路由过渡。过渡组件是一个独立的组件，它可以包装需要过渡的内容并应用过渡效果。通过使用过渡组件，我们可以更简洁地定义路由过渡，并管理过渡状态。

4. 转场动画：v6还引入了转场动画（Transition Animation）的概念。转场动画是一种在路由切换过程中应用于页面元素的动画效果。通过使用转场动画，我们可以实现更加平滑和连续的页面切换效果。React Router提供了一些默认的转场动画效果和配置选项，我们也可以根据需要自定义转场动画。

这些是React Router v6中路由过渡的一些新特性和变化。通过使用这些功能，我们可以更加灵活和强大地管理路由过渡，并实现各种各样的过渡效果。

## Outlet

 `Outlet` 是一个用于渲染子路由的特殊组件。它作为父路由的占位符，用于在父组件中显示子组件。

使用 `Outlet` 组件，可以在父组件中定义子路由的渲染位置。不同于 v5 版本中的 `<Switch>` 组件，v6 版本中的 `Outlet` 组件可以嵌套在其他组件中，并根据父组件的渲染位置自动渲染匹配的子组件。

一个示例，演示如何在父组件中使用 `Outlet` 渲染子组件：

```jsx
import { Outlet } from 'react-router-dom';

function ParentComponent() {
  return (
    <div>
      <h1>父组件</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/about">关于</Link>
          </li>
          <li>
            <Link to="/contact">联系</Link>
          </li>
        </ul>
      </nav>

      <Outlet /> {/* 子组件渲染的位置 */}

      <footer>版权所有</footer>
    </div>
  );
}
```

在上述示例中，`ParentComponent` 组件定义了一个包含导航菜单和页脚的父组件。`Outlet` 组件位于导航菜单和页脚之间的位置，用于渲染匹配的子组件。

接下来，可以在子路由配置中使用 `Outlet` 组件来渲染对应的子组件。例如：

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParentComponent />}>
          <Route index element={<Home />} /> {/* 匹配根路径时渲染的子组件 */}
          <Route path="/about" element={<About />} /> {/* 匹配 "/about" 路径时渲染的子组件 */}
          <Route path="/contact" element={<Contact />} /> {/* 匹配 "/contact" 路径时渲染的子组件 */}
        </Route>
      </Routes>
    </Router>
  );
}
```

在上述示例中，`ParentComponent` 组件被配置为根路径的子组件，并对应了子路由配置中的根 `index` 路径。`About` 组件和 `Contact` 组件分别对应了 `/about` 和 `/contact` 路径。

通过这样的配置，当用户访问不同的路径时，React Router v6 会自动匹配到相应的子路由，并将其渲染在父组件中定义的 `Outlet` 组件位置上。

## 路由懒加载

路由懒加载是一种优化技术，用于延迟加载应用程序中的路由组件。这可以提高页面加载性能，减少初始加载时的资源消耗。

在 React Router v6 中，路由懒加载可以使用 Suspense 和 lazy 函数来实现。

首先，需要在项目中安装 React 和 React Router:

```bash
npm install react react-router-dom
```

然后，可以使用以下代码演示 React Router v6 中的路由懒加载:

```jsx
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
```

在上面的代码中，我们首先使用 `lazy` 函数从相应的路径导入需要懒加载的路由组件。然后，将这些懒加载的组件传递给 React Router 的 `Route` 组件的 `element` 属性中。此时，React Router 会在需要渲染该路由时自动加载该组件。

注意，`Suspense` 组件用于指定在加载路由组件时显示的加载指示符（例如 "Loading..."）。它是 React 16.6 引入的新组件。

## 路由Hook

React-Router v6已经引入了一些新的概念和API来管理路由。其中，使用路由钩子（Hooks）是一个重要且强大的特性。下面将详细介绍React-Router v6中的路由钩子。

1. `useRoutes()`：这是一个顶层路由钩子，用于定义应用的路由层次结构。它接收一个路由配置对象作为参数，并基于配置对象构建路由树。路由配置对象包含了多个路由对象，每个对象都描述了一个路由和相应的组件。该钩子返回一个函数，该函数接收一个路径参数并根据路由配置返回匹配的组件。

2. `useNavigate()`：这是一个用于导航到其他路由的钩子。它返回一个`navigate`函数，该函数接收一个路径参数和一个可选的导航选项对象。通过调用`navigate`函数，你可以在应用程序中执行编程式导航。

3. `useLocation()`：这是一个用于获取当前路由位置信息的钩子。它返回一个`location`对象，该对象包含当前路径、参数和查询字符串等信息。

4. `useMatch()`：这是一个用于匹配当前路径和给定路径模式的钩子。它返回一个`match`对象，该对象包含了匹配的路径、参数和查询字符串等信息。

这些路由钩子可以在函数组件中使用，以在应用程序中管理路由。通过使用每个钩子提供的功能，你可以轻松地实现路由的导航和匹配操作，并根据需要进行相应的处理。