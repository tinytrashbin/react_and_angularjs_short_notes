
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

  useExecOnce(() => {
    // this console.log will be there exactly once.
    console.log("Inside useExecOnce")
    // This API takes 5 seconds to respond.
    api("/sleep_for_5_seconds_and_return_name", {}, function(backend_output) {
      state.set('name', backend_output.name)
    })
  })

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
