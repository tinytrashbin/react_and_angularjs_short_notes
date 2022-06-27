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
