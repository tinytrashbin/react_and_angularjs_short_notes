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

### 3). Functions in JSX

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

### 4). Variables in JSX

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
    var p1 = 33
    let q1 = 34
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
  console.log(p1) // Ok. Allowed. Prints 34.
  console.log(q1) // Not Allowed. Error "q1 undefined".
}
```

`q1` was defined inside `Scope-1`, hence it cannot be used once `Scope-1` ends.


