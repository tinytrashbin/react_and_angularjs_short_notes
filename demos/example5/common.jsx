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
