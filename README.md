## Learning ReactJS by Examples

### Example1:

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


### Example2:

Expression evaluation inside HTML using `{...}`.

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
