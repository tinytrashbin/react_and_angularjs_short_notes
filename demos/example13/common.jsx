function MainFunc(props) {
  const state = useDictState({
    age: 20,
    remaining_age: 80
  })

  useEffectOnChange(() => {
    state.set("remaining_age", 100 - state.get("age"))
  }, [state.get("age")])

  return (
    <div style={{border: "solid red 1px"}} >
        <div>Age = {state.get('age')} </div>
        <div>Remaining Age = {state.get('remaining_age')} </div>
        <div>
          <input type="number" value={state.get('age')} onChange={state.setter('age')} />
        </div>
    </div>
  );
}
