## Learning ReactJS by Examples

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

AngularJS Syntax: `<div ng-repeat="x in list" >...{{x}} .</div>`


**File: common.jsx**

```JSX
function MainFunc(props) {
  var fruits = ["Apple", "Banana", "Orange"]
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <div>
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

[Example7 Demo](demos/example7)

-----------------------------------

### 8). useDictState Hook

`const state = useDictState({key1: ..., key2: ...})`

All the variables with changing value, should be put inside `useDictState` as a key.
`useDictState` will ensure when their value is changed, it's reflected correctly in HTML.

1). Incorrect:

```JSX
function MainFunc(props) {
  var name = "Abc";
  var age = 12;
  var tasks = [{name: "Task1"}, {name: "Task2"}]
  var tabs_in_header = ["About", "Contacts", "Projects"]
  ...
}
```

2). Correct:

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

Note: `tabs_in_header` is a fixed value. It's never changed. Hence we can decide to put it outside of `useDictState` as well. Though there is no harm in keeping it inside `useDictState`.

Accessing and updating key-values in useDictState.

1). We need to use `dict.get(key)` to access the key-value in `useDictState` object, and `dict.set(key, value)` to update a value.

Example:

|       | Usually              | With useDictState    |
| ----- | -------------------- | -------------------- |
| Get   | `state["name"]`      | `state.get("name")`  |
| Get   | `state.name`         | `state.get("name")`  |
| Get   | `state["tasks"][0]`  | `state.get("tasks").get(0)`  |
| Get   | `state.tasks[0]`     | `state.get("tasks").get(0)`  |
| Set   | `state.name = "Abc"` | `state.set("name", "Abc")`  |
| Set   | `state.age = 44 + x` | `state.set("age", 44 + x)`  |
| Set   | `state["age"] = 44 + x` | `state.set("age", 44 + x)`  |
| Get & Set | `state.list[0] = x + y` | `state.get("list").set(0, x + y)`  |
| Get & Set | `state.tasks[0].name = x`  | `state.get("tasks").get(0).set("name", x)`  |
| Get & Set | `state.info.city = "Abc"` | `state.get("info").set("city", "Abc")`  |
| Get & Set | `state.list2[0].number = x + 1` | `state.get("list2").get(0).set("number", x + 1)`  |


**File: common.jsx**

```JSX
function MainFunc(props) {
  const state = useDictState({
    counter: 1
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

Advance Shortcut : `state.set("counter", x => x+1)`


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

[Example8 Demo](demos/example8)

<!--
-----------------------------------

### template

**File: common.jsx**

```JSX
function MainFunc(props) {
  return (
    <div></div>
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
  </div>
<script>
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
  });
</script>
</body>
</html>
```

-->

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


### Try It

[Try JSX code here](try_it/index.html).

