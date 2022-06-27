function MainFunc(props) {
  const state = useDictState({
    counter: 1
  })
  var increment = function() {
    state.set("counter", state.get("counter") + 1)
    // Advance Shortcut :
    // state.set("counter", x => x+1)
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
