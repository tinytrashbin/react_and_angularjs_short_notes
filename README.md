# Learning ReactJS by Examples

## Part1:

Examples in Part1 doesn't require any installation. JSX code is transformed to JS using babel at runtime. Simply placing the `index.html` and `common.jsx` files in a directory (similar to directory in demo folders) and running a `python3 -m http.server` works well enough. This setup should not be used in production.

This has some limitations : We cannot make use of third-party react components and libraries. They can only be installed with npm.

### 1). Example1

**File: common.jsx**

```JSX
function MainFunc(props) {
  return <h1>Hello World!</h1>;
}
```

**File: index.html**

```HTML
<!DOCTYPE html>
<html>
<head>
  <!-- Fixed -->
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-router-dom@6.3.0/umd/react-router-dom.production.min.js" ></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <!-- React Starter Pack Library. -->
  <script crossorigin type="text/babel" src="https://raw.githubusercontent.com/mohitmv/react_starter_pack/master/react_starter_pack.jsx" ></script>

  <!-- common.jsx, where `MainFunc` is defined -->
  <script crossorigin type="text/babel" src="common.jsx" ></script>

  <script type="text/babel">
      ReactDOM.render(<MainFunc />, document.getElementById('mydiv'))
    </script>
</head>
<body id="mydiv" >
</body>
</html>
```
**File: angularjs.html**

```HTML
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp" ng-controller="myCtrl" >
<h1>Hello World !</h1>
<script>
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
  });
</script>
</body>
</html>
```

[Example1 Demo](demos/example1)

-----------------------------------

### 2). Expression evaluation inside HTML using `{...}`.

**File: common.jsx**

```JSX
function MainFunc(props) {
  var name = "Truck"
  return <h1>Hello {name} ! There are total of {3 + 4} people.</h1>;
}
```

Note: No change in `index.html`

**File: angularjs.html**

```HTML
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp" ng-controller="myCtrl" >
<h1>Hello {{name}} ! There are total of {{3 + 4}} people.</h1>
<script>
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
      $scope.name = "Truck";
  });
</script>
</body>
</html>
```

**React vs AngularJS Difference:**

1. `{name}` vs `{{name}}`
2. `{3 + 4}` vs `{{3 + 4}}`

[Example2 Demo](demos/example2)

-----------------------------------


### 3). Nested HTML Content

**File: common.jsx**

```JSX
function MainFunc(props) {
  const name = "World"
  const what_i_like = "fruits"
  return (
    <div>
      <div>
          Hello {name}!
      </div>
      <div>
        <div>I like following {what_i_like}:</div>
        <ul>
          <li>Apples</li>
          <li>Bananas</li>
          <li>Cherries</li>
        </ul>
      </div>
    </div>
  );
}
```

Note: No change in `index.html`

[Example3 Demo](demos/example3)

-----------------------------------

### 4). Inline Style

React Syntax: `style={dict_expression}`

React Example1: `style={{color: "red", fontSize: "14px"}}`

AngularJS Syntax:

1). `ng-style="dict_expression"` 

2). `style="color: red; ...."`

AngularJS Example1: `ng-style="{color: 'red', 'font-size': '14px'}"`

**File: common.jsx**

```JSX
function MainFunc(props) {
  const name = "World"

  const my_favorite_color = "blue"

  const my_weight = 80

  const pizza_color = (my_weight > 50 ? "lightblue": "red")

  var banana_style_dict = {fontSize: "14px"}
  banana_style_dict.fontWeight = 600
  banana_style_dict.border = "solid red 1px"
  if (my_weight > 80) {
    banana_style_dict.color = "red"
  } else {
    banana_style_dict.color = "brown"
  }

  return (
    <div>
      <div style={{color: "green", fontWeight: 900}} >
          Hello {name}!
      </div>
      <div>
        <div style={{color: my_favorite_color, fontSize: "15px"}} >I like following things:</div>
        <ul>
          <li>Apples</li>
          <li style={{color: pizza_color, fontSize: "16px"}} >Pizza</li>
          <li style={{color: (my_weight > 60 ? "blue": "red"), "padding": "20px 0px"}} >Cherries</li>
          <li style={banana_style_dict} >Banana</li>
        </ul>
      </div>
    </div>
  );
}
```

**File: angularjs.html**

```HTML
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp" ng-controller="myCtrl" >
<div>
  <div style="color: green; font-weight: 900" >
      Hello {{name}}!
  </div>
  <div>
    <div ng-style="{color: my_favorite_color, 'font-size': '15px'}" >I like following things:</div>
    <ul>
      <li>Apples</li>
      <li ng-style="{color: pizza_color, 'font-size': '16px'}" >Pizza</li>
      <li ng-style="{color: (my_weight > 60 ? 'blue': 'red'), padding: '20px 0px'}" >Cherries</li>
      <li ng-style="banana_style_dict" >Banana</li>
    </ul>
  </div>
</div>

<script>
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    $scope.name = "World"

    $scope.my_favorite_color = "blue"

    $scope.my_weight = 80

    $scope.pizza_color = ($scope.my_weight > 50 ? "lightblue": "red")

    $scope.banana_style_dict = {"font-size": "14px"}
    $scope.banana_style_dict["font-weight"] = 600
    $scope.banana_style_dict.border = "solid red 1px"
    if ($scope.my_weight > 80) {
      $scope.banana_style_dict.color = "red"
    } else {
      $scope.banana_style_dict.color = "brown"
    }
  });
</script>
</body>
</html>
```


Note: No change in `index.html`

[Example4 Demo](demos/example4)

-----------------------------------

### 5). OnClick

React Syntax:

1). Function without argument: `onClick={func_name}`

2). Function with argument: `onClick={() => func_name(x, y)}`

AngularJS Syntax:

1). `ng-click="func_name()"`

2). `ng-click="func_name(x, y)"`

**File: common.jsx**

```JSX
function MainFunc(props) {
  const func1 = function() {
    alert("Abc")
  }

  const func2 = function(x, y) {
    alert("Abc " + x + "," + y)
  }

  return (
    <div>
      <div><button onClick={func1} >Click1</button> </div>
      <div><button onClick={() => func2(4, 5)} >Click2</button> </div>
    </div>
  );
}
```

**File: angularjs.html**

```HTML
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp" ng-controller="myCtrl" >
  <div>
    <div><button ng-click="func1()" >Click1</button> </div>
    <div><button ng-click="func2(4, 5)" >Click2</button> </div>
  </div>
<script>
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    $scope.func1 = function() {
      alert("Abc")
    }

    $scope.func2 = function(x, y) {
      alert("Abc " + x + "," + y)
    }
  });
</script>
</body>
</html>
```

Note: No change in `index.html`

[Example5 Demo](demos/example5)

-----------------------------------

### 6). Conditionals / ng-if

React Syntax: `{condition && <div>....</div>}`

AngularJS Syntax: `<div ng-if="condition" >....</div>`

**File: common.jsx**

```JSX
function MainFunc(props) {
  const animals = ["Cat", "Tiger"]
  const show_fruits = false
  return (
    <div>
      <div style={{border: "solid blue 1px"}} >
        Box1:
        {show_fruits && (
          <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
          </ul>)}
      </div>
      <div style={{border: "solid blue 1px"}} >
        Box2:
        {animals.length > 0 && (
          <ul>
            <li>Cat</li>
            <li>Tiger</li>
          </ul>)}
      </div>
    </div>
  );
}
```

**File: angularjs.html**

```HTML
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp" ng-controller="myCtrl" >

<div>
  <div style="border: solid blue 1px" >
    Box1:
    <ul ng-if="show_fruits">
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
  </div>
  <div style="border: solid blue 1px" >
    Box2:
    <ul ng-if="animals.length > 0" >
      <li>Cat</li>
      <li>Tiger</li>
    </ul>
  </div>
</div>

<script>
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    $scope.animals = ["Cat", "Tiger"]
    $scope.show_fruits = false
  });
</script>
</body>
</html>
```

[Example6 Demo](demos/example6)

-----------------------------------


### 7). Map / ng-repeat

React Syntax: `{list.map((x) => <div>...{x}...</div>)}`

React Syntax (Advance): `{list.map((x) => <div key={some_unique_id} >...{x}...</div>)}`

AngularJS Syntax: `<div ng-repeat="x in list" >...{{x}} .</div>`


**File: common.jsx**

```JSX
function MainFunc(props) {
  var fruits = ["Apple", "Banana", "Orange"]
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <div key={fruit} >
            I like <b>{fruit}</b>
          </div>
        ))}
      </ul>
    </div>
  );
}
```

**File: angularjs.html**

```HTML
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp" ng-controller="myCtrl" >
  <div>
    <div ng-repeat="fruit in fruits" >
      I like <b>{{fruit}}</b>
    </div>
  </div>
<script>
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    $scope.fruits = ["Apple", "Banana", "Orange"]
  });
</script>
</body>
</html>
```

Note:

1). It's optional to pass a `key` attribute when repeating a div. If we pass, it improves the speed/performance of application. we can pass a unique id or any other unique value.


[Example7 Demo](demos/example7)

-----------------------------------

### 8). State management and react hooks

If non-const variables (i.e. variables whose value can change over time) are used in HTML content, they should be used with state managers, like `useState` hook, `useDictState` hook, redux store etc.

In React, there are so many ways of managing state. Details can be found in [this section](#14-state-management-in-detail). Here is a brief summary of `React.useState` and `useDictState` hooks.

#### A). `React.useState` (Available with React by default)

- Suitable for Atomic types. Example: integers, boolean and string.
- Not suitable for complex types like list and dict. We must use Redux Store or React Reducer for them.
- Suitable for complex types like list/dict **ONLY IF** we never edit them partially, but replace them with a new value.

How to use `React.useState`:

```JSX
// 10 is the initial value of variable `count`.
const [count, setCount] = React.useState(10);

// Using it's value. Which is 10.
<h1>{count}</h1>

// Change it's value to something else (100 in this case).
setCount(100);

// NOT ALLOWED.
count = 100;
```

Using complex type with `React.useState`:


```JSX
// This dictionary `{name: "A", ...}` is the initial value of variable `info`.
const [info, setInfo] = React.useState({name: "A",
                                        age: 40})

// Using it's value.
<div>Name = {info.name}, Age = {info.age}</div>

// Updating it's value to some other dictionary:
setInfo({name: "B", age: 55})

// Updating it's value to some other dictionary:
setInfo(new_info)

// NOT ALLOWED.
info.name = "B"
```

#### B). useDictState hook (Custom implementation by React Starter Pack)

- Suitable for any kind of data types inside a dictionary. Supports deeply nested dictionary.
- `.get` or `.set` needs to be used for accessing dict keys / list index.

Syntax: `const state = useDictState({key1: ..., key2: ...})`

```JSX
function MainFunc(props) {
  const state = useDictState({
    name: "Abc",
    age: 12,
    tasks: [{name: "Task1"}, {name: "Task2"}],
  })
  const tabs_in_header = ["About", "Contacts", "Projects"]
  ...
}
```

Note: Value of `tabs_in_header` will remain fixed. It will never change. Hence we can decide to put it outside of `useDictState` as well. Though there is no harm in keeping it inside `useDictState`.

Note: `useDictState` should be used only once in a component.

Accessing and updating key-values in useDictState.

1). We need to use `dict.get(key)` to access the key-value in `useDictState` object, and `dict.set(key, value)` to update a value.

Example:

|       | Usually              | With useDictState    |
| ----- | -------------------- | -------------------- |
| Get   | `state["name"]`      | `state.get("name")`  |
| Get   | `state.name`         | `state.get("name")`  |
| Get   | `state["tasks"][0]`  | `state.get("tasks").get(0)`  |
| Get   | `state.tasks[0]`     | `state.get("tasks").get(0)`  |
| Get   | `state.list3.push(x+y)` | `state.get("list3").push(x + y)`  |
| Get   | `state.list3.pop()` | `state.get("list3").pop()`  |
| Set   | `state.name = "Abc"` | `state.set("name", "Abc")`  |
| Set   | `state.age = 44 + x` | `state.set("age", 44 + x)`  |
| Set   | `state["age"] = 44 + x` | `state.set("age", 44 + x)`  |
| Get & Set | `state.age = state.age + 1` | `state.set("age", state.get("age") + 1)`  |
| Get & Set | `state.age += 1` | `state.set("age", state.get("age") + 1)`  |
| Get & Set | `state.list[0] = x + y` | `state.get("list").set(0, x + y)`  |
| Get & Set | `state.tasks[0].name = x`  | `state.get("tasks").get(0).set("name", x)`  |
| Get & Set | `state.info.city = "Abc"` | `state.get("info").set("city", "Abc")`  |
| Get & Set | `state.list2[0].number = x + 1` | `state.get("list2").get(0).set("number", x + 1)`  |

Important Differences

|           | Usually              | With useDictState    |
| --------- | -------------------- | -------------------- |
| `length` vs `length()` | `state.tasks.length` | `state.get("tasks").length()`  |


When and how to use `.set`:

If there is `=` (i.e. it sets the value) and it looks like:

A). `state.complex.expression.key = some.complex.expression`

B). `state.complex.expression["key"] = some.complex.expression`

C). `state.complex.expression[3] = some.complex.expression`

With `.set`, it will become:

A). `state.complex.expression.set("key", some.complex.expression)`

B). `state.complex.expression.set("key", some.complex.expression)`

C). `state.complex.expression.set(3, some.complex.expression)`

-------

**File: common.jsx**

```JSX
function MainFunc(props) {
  const state = useDictState({
    counter: 1,
    name: "A",
  })
  var increment = function() {
    state.set("counter", state.get("counter") + 1)
  }
  return (
    <div>
      <div style={{fontSize: "20px"}} >Counter Value = {state.get("counter")}</div>
      <div>
        <button onClick={increment} >Click to Increase Counter</button>
      </div>
    </div>
  );
}
```

Note: Advance Shortcut : `state.set("counter", x => x+1)`


**Same example with `React.useState`**:

```JSX
function MainFunc(props) {
  const [counter, setCounter] = React.useState(1)
  const [name, setName] = React.useState("Default-Name")
  var increment = function() {
    setCounter(counter + 1)
  }
  return (
    <div>
      <div style={{fontSize: "20px"}} >Counter Value = {counter}</div>
      <div>
        <button onClick={increment} >Click to Increase Counter</button>
      </div>
    </div>
  );
}
```

**File: angularjs.html**

```HTML
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp" ng-controller="myCtrl" >
  <div>
    <div style="font-size: 20px" >Counter Value = {{counter}}</div>
    <div>
      <button ng-click="increment()" >Click to Increase Counter</button>
    </div>
  </div>
<script>
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    $scope.counter = 1
    $scope.increment = function() {
      $scope.counter += 1
    }
  });
</script>
</body>
</html>
```
**React vs AngularJS Difference:**

| React              | AngularJS    |
| -------------------- | -------------------- |
| `onClick={increment}` | `ng-click="increment()"` |
| `<div>Counter Value = {state.get("counter")}</div>` | `<div>Counter Value = {{counter}}</div>` |
| `state.set("counter", state.get("counter") + 1)` | `$scope.counter += 1` |
| `const state = useDictState({counter: 1})` | `$scope.counter = 1` |


**`useDictState` vs `React.useState` Difference:**

| useDictState              | React.useState    |
| -------------------- | -------------------- |
| `<p>Counter Value = {state.get("counter")}</p>` | `<p>Counter Value = {counter}</p>` |
| `state.set("counter", state.get("counter") + 1)` | `setCounter(counter + 1)` |
| `const state = useDictState({counter: 1})` | `const [counter, setCounter] = React.useState(1)` |

[Example8 Demo](demos/example8)


-----------------------------------

### 9). useDictState / React.useState hook and Input

React Syntax with `useDictState`:

```JSX
<input value={state.get('name')} onChange={state.setter('name')} />
```

React Syntax with `React.useState`:

```JSX
<input value={name} onChange={(e) => setName(e.target.value)} />
```

Angular Syntax: `<input ng-model="name" />`

Note:

1. To bidirectionally connect input's value with a variable, `value` and `onChange` needs to be specified correctly.

2. `.setter` method returns a function, that will automatically update the value of key `name` whenever input's text is changed in browser.

3. When using `setName`, we can get input box's text value from `e.target.value`. Note that `setter` does it automatically in case of `useDictState`.


**File: common.jsx**

```JSX
function MainFunc() {
  const state = useDictState({
    name: "Alan",
    city: "B"
  })
  return (
    <div style={{border: "solid red 1px"}} >
      <div>My Name = {state.get('name')} </div>
      <div>
        <input value={state.get('name')} onChange={state.setter('name')} />
      </div>
      <div>My City = {state.get('city')}</div>
      <div>
        <select value={state.get('city')} onChange={state.setter('city')} >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
    </div>
  );
}
```

**Same example with `React.useState`**:

```JSX
function MainFunc() {
  const [name, setName] = React.useState("Alan")
  const [city, setCity] = React.useState("B")
  return (
    <div style={{border: "solid red 1px"}} >
      <div>My Name = {name} </div>
      <div>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>My City = {city}</div>
      <div>
        <select value={city} onChange={(e) => setCity(e.target.value)} >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
    </div>
  );
}
```

**`useDictState` vs `React.useState` Difference:**

| useDictState              | React.useState    |
| -------------------- | -------------------- |
| `<p>My Name = {state.get("name")}</p>` | `<p>My Name = {name}</p>` |
| `onChange={state.setter('name')}` | `onChange={(e) => setName(e.target.value)}` |
| `onChange={state.setter('city')}` | `onChange={(e) => setCity(e.target.value)}` |


**File: angularjs.html**


```HTML
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp" ng-controller="myCtrl" >

<div style="border: solid #ccc 1px" >
  <div>My Name = {{name}}</div>
  <div><input ng-model="name" /></div>
  <div>My City = {{city}}</div>
  <div>
    <select ng-model="city" >
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</div>

<script>
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    $scope.name = "Alan"
    $scope.city = "B"
  });
</script>
</body>
</html>
```

[Example9 Demo](demos/example9)

-----------------------------------

### 10). Complex and Nested useDictState hook

Note: `React.useState` is not suitable for complex dictionary objects. We can use `useDictState` or `Redux Store` or `React Reducer` for complex state.

**File: common.jsx**

```JSX
function MainFunc(props) {
  const state = useDictState({
    books: [
      {is_open: false, id: 1},
      {is_open: true, id: 2},
      {is_open: false, id: 3}],
    name: "Book",
  })
  const open = function(book) {
    book.set("is_open", true)
  }
  const close = function(book) {
    book.set("is_open", false)
  }
  return (
    <div>
      {state.get("books").map(book => (
        <div key={book.get("id")} style={{border: "solid #ccc 1px", margin: "10px"}} >
          Book-{book.get("id")}
          <div>
            {book.get("is_open") &&
              <img src="https://thumbs.dreamstime.com/z/open-book-vector-icon-white-background-53193927.jpg"
                  style={{width: "40px"}} />}
            {!book.get("is_open") &&
              <img src="https://image.shutterstock.com/image-vector/closed-book-bookmark-icon-vector-260nw-1438430336.jpg"
                  style={{width: "40px"}} />}
          </div>
          <div>
            <button onClick={()=>open(book)} >Open</button>
            <button onClick={()=>close(book)} >Close</button>
          </div>
        </div>
        ))}
    </div>
  );
}
```

**File: angularjs.html**

```HTML
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp" ng-controller="myCtrl" >
<div>
  <div ng-repeat="book in books" style="border: solid #ccc 1px; margin: 10px" >
    Book-{{book.id}}
    <div>
      <img ng-if="book.is_open" src="https://thumbs.dreamstime.com/z/open-book-vector-icon-white-background-53193927.jpg" style="width: 40px" />
      <img ng-if="!book.is_open" src="https://image.shutterstock.com/image-vector/closed-book-bookmark-icon-vector-260nw-1438430336.jpg" style="width: 40px" />
    </div>
    <div>
      <button ng-click="open(book)" >Open</button>
      <button ng-click="close(book)" >Close</button>
    </div>
  </div>
</div>

<script>
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    $scope.books = [
        {is_open: false, id: 1},
        {is_open: true, id: 2},
        {is_open: false, id: 3}
    ]
    $scope.open = function(book) {
      book.is_open = true
    }
    $scope.close = function(book) {
      book.is_open = false
    }
  });
</script>
</body>
</html>
```

| React              | AngularJS    |
| -------------------- | -------------------- |
| `onClick={()=>open(book)}` | `ng-click="open(book)"` |
| `<div>Book-{book.get("id")}</div>` | `<div>Book-{{book.id}}</div>` |
| `book.set("is_open", true)` | `book.is_open = true` |
| `{book.get("is_open") && <img .../>}` | `<img ng-if="book.is_open" ... />` |
| `{state.get("books").map(book => (...))}` | `<div ng-repeat="book in books" >...</div>` |



[Example10 Demo](demos/example10)


-----------------------------------

### 11). API call and `React.useEffect` hook

Note: `MainFunc` function is called everytime state is changed. If a code needs to be executed only once (example: API call), it should be kept inside `React.useEffect` with second argument = `[]`

Syntax:

```JSX
React.useEffect(() => {
  // Any Code.. Example API call.
}, [])
```

**File: common.jsx**

```JSX

function MainFunc(props) {
  const state = useDictState({
    name: "Default-Name",
    counter: 1
  })
  var increment = function() {
    state.set("counter", state.get("counter") + 1)
  }
  // this console.log will be there every time state is changed.. For
  // example when button is clicked.
  console.log("Inside MainFunc " + state.get("counter"))

  React.useEffect(() => {
    // this console.log will be there exactly once.
    console.log("Inside React.useEffect")
    // This API takes 5 seconds to respond.
    api("/sleep_for_5_seconds_and_return_name", {}, function(d) {
      state.set('name', d.name)
    })
  }, [])

  return (
    <div>
      <h2>Name = {state.get("name")}</h2>
      <div>This API takes 5 seconds to respond. After 5 seconds name will be changed.</div>
      <div style={{fontSize: "20px"}} >Counter Value = {state.get("counter")}</div>
      <div>
        <button onClick={increment} >Click to Increase Counter</button>
      </div>
    </div>
  );
}

```

**File: angularjs.html**

```HTML
<!DOCTYPE html>
<html>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script type="text/javascript" crossorigin="anonymous"  src="angular_starter_pack.js"></script>
<body ng-app="myApp" ng-controller="myCtrl" >

<div>
  <h2>Name = {{name}}</h2>
  <div>This API takes 5 seconds to respond. After 5 seconds name will be changed.</div>
  <div style="font-size: 20px; " >Counter Value = {{counter}}</div>
  <div>
    <button ng-click="increment()" >Click to Increase Counter</button>
  </div>
</div>

<script>
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope, $http) {
    $scope.name = "Default-Name"
    $scope.counter = 1

    $scope.increment = function() {
      $scope.counter += 1
    }

    api($http, "/sleep_for_5_seconds_and_return_name", {}, function(backend_output) {
      $scope.name = backend_output.name
    })
  });
</script>
</body>
</html>
```

[Example11 Demo](demos/example11)


-----------------------------------


### 12). Subcomponents

Consider this example of building a house using smaller components:

**File: common.jsx**

```JSX

function Window(props) {
  const style_dict = {
    display: "inline-block",
    width: "100px",
    height: props.height+ "px",
    border: "solid #ccc 1px",
    margin: "5px"
  };
  return (<div style={style_dict} >Window of {props.height}px height.</div>);
}

function Door() {
  const style_dict = {
    display: "inline-block",
    width: "100px",
    height: "200px",
    border: "solid red 1px",
    margin: "5px"
  };
  return (<div style={style_dict} >Door.</div>);
}

function Room1() {
  return (
    <div style={{border: "solid blue 1px", margin: "15px", display: "inline-block"}} >
      <h3>I am Room1</h3>
      <div >
        <Window height={100} />
        <Door/>
        <Window height={100} />
      </div>
    </div>
  )
}

function Room2() {
  return (
    <div style={{border: "solid blue 1px", margin: "15px", display: "inline-block"}} >
      <h3>I am Room2</h3>
      <div >
        <Window height={80} />
        <Window height={120} />
        <Door/>
        <Window height={120} />
        <Window height={80} />
      </div>
    </div>
  )
}

function Foodbox({name, quantity}) {
  return (
    <div style={{margin: "4px", backgroundColor: "#ddd"}} >
      I am {name}. My quantity = {quantity}kg.
    </div>
  )
}

function Kitchen() {
  const food_list = ["Apple Juice", "Paneer", "Paratha"]
  return (
    <div style={{border: "solid blue 1px", margin: "15px", display: "inline-block"}} >
      <h3>I am Kitchen</h3>
      <div>
        Food items:
      </div>
      <div>
        {food_list.map(food_name => <Foodbox name={food_name} quantity={2} />)}
      </div>
    </div>
  )
}

function MainFunc() {
  return (
    <div style={{border: "solid black 1px"}} >
      <Room1 />
      <Kitchen />
      <Room2 />
    </div>
  )
}

```

Note:

1). Parameters/arguments/attributes passed to a component can be accessed from `props` dictionary.

In this example, see how `height` is passed to `<Window height={80} />`
and how `name` is passed to `<Foodbox name={food_name} />`.

Which is then accessed using `props.height` or `props.name` in those component implementation.

2). In a component implementation, if inputs are declared like `function Foodbox({name, quantity}) {`, we can directly use the variable `name` and `quantity`.. because dictionary value coming from input is destructured into these 2 variable. [Learn more here](https://www.w3schools.com/react/react_es6_destructuring.asp).

[Example12 Demo](demos/example12)


-----------------------------------


### 13). [Advance] Custom onChange

Calling a function when value of a state variable is changed:

Syntax: 

```JSX
React.useEffect(() => {
  // Action to be taken when variables are changed.
}, [changed_variables])
```

In this example `age` is the changed variable.

**File: common.jsx**

```JSX
function MainFunc(props) {
  const [age, setAge] = React.useState(20)
  const [remaining_age, setRemainingAge] = React.useState(80)

  React.useEffect(() => {
    setRemainingAge(100 - age)
  }, [age])

  return (
    <div style={{border: "solid red 1px"}} >
      <div>Age = {age} </div>
      <div>Remaining Age = {remaining_age} </div>
      <div>
        <input type="number" value={age} onChange={e => setAge(e.target.value)} />
      </div>
    </div>
  );
}
```

**File: angularjs.html**

```HTML
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp" ng-controller="myCtrl" >

  <div style="border: solid red 1px" >
      <div>Age = {{age}} </div>
      <div>Remaining Age = {{remaining_age}} </div>
      <div>
        <input type="number" ng-model="age" ng-change="age_change()" />
      </div>
  </div>

<script>
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
    $scope.age = 20
    $scope.remaining_age = 80
    $scope.age_change = function() {
      $scope.remaining_age = 100 - $scope.age
    }
  });
</script>
</body>
</html>
```

In this example, when `age` is changed, we want to update the `remaining_age` variable automatically.

Note: `React.useEffect` is same as what we used in Example11 for API call. In that example we passed `[]` second argument. If we pass `[]` as second argument then the `effect` will take place only once.

[Example13 Demo](demos/example13)


-----------------------------------


### Functions in JSX

```JSX
function Func1(x) {
  return x+2
}

var Func2 = function(x) {
  return x+2
}

var Func3 = (x) => {
  console.log(x)
  return x+2
}

// If the function has ONLY one statement, and the statement returns a
// value, you can remove the brackets and the return keyword.
var Func4 = (x) => x+2

// If you have ONLY one parameter, you can skip the parentheses as well:
var Func5 = x => x+2

// If function doesn't take any input.
var Func6 = () => 33
```

-----------------------------------

### Variables in JSX

```JSX
var x1 = 5.6;
var x2 = 5;

x1 = 88  // Ok. Allowed.

const y1 = 5.6;
// y1 = 6; // Not allowed. Error.

let z1 = "Abc"
z1 = "Def" // OK. Allowed.

function Func() {
  {  // Scope-1 Started.
    var p1 = 30
    let q1 = 60
    { // Scope-2 Started.
      console.log(p1) // Ok. Allowed.
      console.log(q1) // Ok. Allowed.
    }  // Scope-2 Ended.
    p1 += 1
    q1 += 1
    console.log(p1) // Ok. Allowed.
    console.log(q1) // Ok. Allowed.
    { // Scope-3 Started.
      console.log(p1) // Ok. Allowed.
      console.log(q1) // Ok. Allowed.
    }  // Scope-3 Ended.
    p1 += 1
    q1 += 1
  }  // Scope-1 Ended.
  console.log(p1) // Ok. Allowed. Prints 32.
  console.log(q1) // Not Allowed. Error "q1 undefined".
}
```

`q1` was defined inside `Scope-1`, hence it cannot be used once `Scope-1` ends.

`p1` can be used anywhere in function `Func`.

-----------------------------------

### JSX Syntax Requirements:

#### 1). Unpaired tags (example `<input />`, `<br/>`) must end with `/>`

Example:

 - Invalid: `<input>`

 - Valid: `<input/>`

 - Invalid: `<br>`

 - Valid: `<br/>`


#### 2). `className` instead of `class`

Example:

 - Invalid: `<div class="product_div" >Abc</div>`

 - Valid: `<div className="product_div" >Abc</div>`

 - Valid: `<div className={"product_div"} >Abc</div>`


#### 3). Only One Top Level Element.

Alternatively `<>`, `</>` can be used
   for avoiding unnecessary tags.

Example:

- A). Invalid:

```JSX
function MainFunc(props) { // Error.
  return (
    <div>Abc</div>
    <div>Def</div>
  );
}
```

- B). Valid:

```JSX
function MainFunc(props) {
  return (
    <div>
      <div>Abc</div>
      <div>Def</div>
    </div>
  );
}
```

- C). Valid:

```JSX
function MainFunc(props) {
  return (
    <>
      <div>Abc</div>
      <div>Def</div>
    </>
  );
}
```

#### 4). `JSON.stringify` variables to show inside HTML.

By default an integer or string type of variable can be displayed in HTML using `{variable}`.

To display other type of variables (example - boolean, or list/dict) inside HTML, use `{JSON.stringify(variable)}`

```HTML
<div>List = {JSON.stringify(list)}</div>
```

Note: To display dict/list coming out of `useDictState`, we must add `.value()` like this : `<div>List = {JSON.stringify(variable.value())}</div>` 


### Note

1. In this tutorial, we are using [React Starter Pack](https://github.com/mohitmv/react_starter_pack/) library.

2. In this tutorial, we are using inline babel transformer for simplicity. In production apps, babel transformation is done offline. Which requires npm installation. `npm` installation is skipped from this tutorial.


### Try It

[Try JSX code here](https://tinytrashbin.github.io/react_and_angularjs_short_notes/try_it/index.html).



## Part2:

Part-2 starts with local npm setup.

Install node.js and npm. Clone [this repo](https://github.com/tinytrashbin/react_app_with_redux_toolkit) to start with. Run `npm install`. Figure out the details of node.js installation from external sources.


### 14). State Management In Detail

There are a lot of ways to manage state in React:

A). useState: (Available with React): [Explained Above](#8-state-management-and-react-hooks)

B). useDictState (Custom implementation by React Starter Pack): [Explained Above](#8-state-management-and-react-hooks).

C). Global Store with Redux Toolkit : We will cover this.

D). Global Store with Redux but without Toolkit : We will NOT cover this.

E). Global store with react reducer and immer library : We will cover this. It's similar to Redux Toolkit.

F). Global store with react reducer without immer library : We will NOT cover this.

G). `useImmer` hook (Custom Implementation) : We will cover this.


Importance Order: A > G > C > B > E

------

#### C). Global Store with Redux Toolkit

[This is a  basic example](https://github.com/tinytrashbin/react_app_with_redux_toolkit), demonstrating how redux toolkit can be used for state management.

Note: In general, in a react app, all the important code goes in `src` directory.

In this app:

- `src/state_reducers.js` contains state management logic.

- `src/common.jsx` contains components.

- `src/index.jsx` contains stub code, which doesn't change much.

**File: src/common.jsx**

```JSX
import './main.css';
import {book_slice} from './state_reducers';
import { useSelector, useDispatch } from 'react-redux';

function MainFunc(props) {
  const state = useSelector(store => store.book_slice)
  const dispatch = useDispatch();
  return (
    <div className="top_box" >
      <div>
      {state.books.map((book, book_index) => (
        <div key={book.id} style={{border: "solid red 1px", padding: "10px"}} >
          Book-{book.id}
          <div>
            {book.is_open &&
              <img src="https://thumbs.dreamstime.com/z/open-book-vector-icon-white-background-53193927.jpg"
                  style={{width: "40px"}} />}
            {!book.is_open &&
              <img src="https://image.shutterstock.com/image-vector/closed-book-bookmark-icon-vector-260nw-1438430336.jpg"
                  style={{width: "40px"}} />}
          </div>
          <div>Price = {book.price}</div>
          <button onClick={() => dispatch(book_slice.actions.open(
                book_index))} >Open</button>
          <button onClick={() => dispatch(book_slice.actions.close(
                  book_index))} >Close</button>
          <button onClick={() => dispatch(
              book_slice.actions.increase_price({
                book_index: book_index, price: 100}))} >
            Increase Price
          </button>
        </div>
      ))}
      </div>
      <button onClick={() => dispatch(book_slice.actions.add())} >Add</button>
    </div>
  );
}

export default MainFunc;
```

**File: src/state_reducers.jsx**

```JSX
import {createSlice } from '@reduxjs/toolkit';

export const book_slice = createSlice({
  name: 'book_slice',
  initialState: {
    books: [
      {id: 1, is_open: true, price: 10},
      {id: 2, is_open: false, price: 20},
      {id: 3, is_open: true, price: 30},
    ],
    id_counter: 4
  },
  reducers: {
    add: function (state) {
      state.books.push({id: state.id_counter, is_open: false, price: 7})
      state.id_counter += 1
    },
    open: function (state, {payload: book_index}) {
      state.books[book_index].is_open = true
    },
    close: function (state, {payload: book_index}) {
      state.books[book_index].is_open = false
    },
    increase_price: function (state, {payload: {book_index, price}}) {
      state.books[book_index].price += price
    }
  }
})

export default book_slice.reducers
```

**File: src/index.jsx**

```JSX
import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client';
import MainFunc from './common';

import { configureStore } from '@reduxjs/toolkit';
import {book_slice} from './state_reducers';

export const store = configureStore({
  reducer: {
    book_slice: book_slice.reducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainFunc />
    </Provider>
  </React.StrictMode>
);
```

-----

#### E). Global store with react reducer and immer library

It's same as Redux Toolkit after using the `"Redux Toolkit Glue"` library. No code change required except importing `"Redux Toolkit Glue"` library instead of `redux-toolkit` library.

[Here is](https://github.com/tinytrashbin/redux_toolkit_glue) an example using `"Redux Toolkit Glue"`.

-----

#### G). `useImmer` hook (Custom Implementation) :

[This is a basic example](https://github.com/tinytrashbin/react_examples/blob/master/src/example2.jsx), demonstrating how `useImmer` hook can be used for state management.

Also See [Live demo (Example2)](https://tinytrashbin.github.io/react_examples/demos/#/example2)

**File: src/example2.jsx**

```JSX
function Example2() {
  const [state, updateState] = useImmer({
    books: [
      {id: 1, is_open: true, price: 100},
      {id: 2, is_open: false, price: 200},
      {id: 3, is_open: true, price: 300},
    ],
    id_counter: 4
  })

  const open = function(book_index) {
    updateState(state => {
      state.books[book_index].is_open = true
    })
  }

  const close = function(book_index) {
    updateState(state => {
      state.books[book_index].is_open = false
    })
  }

  const add = function() {
    updateState(state => {
      state.books.push({id: state.id_counter, is_open: false, price: 80})
      state.id_counter += 1
    })
  }

  const increase_price = function(book_index, price) {
    updateState(state => {
      state.books[book_index].price += price
    })
  }

  return (
    <div >
      <Header/>
      <h2>Example2</h2>
      <div className="top_box" >
        {state.books.map((book, book_index) => (
          <div key={book.id} style={{border: "solid red 1px", padding: "10px"}} >
            Book-{book.id}
            <div>{book.is_open ? "Open" : "Close"} ; Price = {book.price}</div>
            <button onClick={() => open(book_index)} >Open</button>
            <button onClick={() => close(book_index)} >Close</button>
            <button onClick={() => increase_price(book_index, 100)} >
              Increase Price
            </button>
          </div>
        ))}
      </div>
      <button onClick={add} >Add</button>
    </div>
  );
}

```

Note: When using `useImmer` hook, we need to call `updateState` like this only for updating the state. We cannot update the state directly.

-------

### 15). React Router

React Router is useful for connecting URLs with different components.

For example, in this [Live demo](https://tinytrashbin.github.io/react_examples/demos/#/example2), we can see `Example1`, `Example2`, `Example3` shows up for different URL (on different tabs).

[From here](https://github.com/tinytrashbin/react_examples/tree/master/src) we can see that `Example1`, `Example2` and `Example3` are 3 different components defined in 3 different files.

Which are combined in [`common.jsx`](https://github.com/tinytrashbin/react_examples/blob/master/src/common.jsx)

**File: src/common.jsx**

```JSX
import Example1 from './example1';
import Example2 from './example2';
import Example3 from './example3';
import {Routes, Route, HashRouter} from "react-router-dom"

function MainFunc() {
  return (
    <HashRouter>
      <Routes>
        <Route >
          <Route path="/" element={<Example1 />} />
          <Route path="/example1" element={<Example1 />} />
          <Route path="/example2" element={<Example2 />} />
          <Route path="/example3" element={<Example3 />} />
          <Route path="*" element={<h1>Invalid</h1>} />
        </Route>
      </Routes>
    </HashRouter>);
}

export default MainFunc;
```

- As per these route declaration, when URL ends with `"/example2"`, then `Example2` component will display. Similarly for `Example1` and `Example3`.

- In real web applications, `Example1`, `Example2`, `Example3` are different page of website. For example: login page, signup page, profile page, admin page etc.

-------

