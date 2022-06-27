function MainFunc(props) {
  const state = useDictState({
    name: "Alan",
    city: "B"
  })
  return (
    <div style={{border: "solid red 1px"}} >
      <div>
        My Name = {state.get('name')}
      </div>
      <div>
        <input value={state.get('name')} onChange={state.setter('name')} />
      </div>
      <div>
        My City = {state.get('city')}
      </div>
      <div>
        <select value={state.get('city')} onChange={state.setter('city')} >
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
    </div>
  );
}
