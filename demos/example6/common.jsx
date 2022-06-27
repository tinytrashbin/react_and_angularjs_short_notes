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
