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
