
function Window(props) {
  const style_dict = {
    display: "inline-block",
    width: "100px",
    height: props.height+ "px",
    border: "solid #ccc 1px",
    margin: "5px"
  };
  return (<div style={style_dict} >Window of {props.height}px height.</div>);
}

function Door(props) {
  const style_dict = {
    display: "inline-block",
    width: "100px",
    height: "200px",
    border: "solid red 1px",
    margin: "5px"
  };
  return (<div style={style_dict} >Door.</div>);
}

function Room1(props) {
  return (
    <div style={{border: "solid blue 1px", margin: "15px", display: "inline-block"}} >
      <h3>I am Room1</h3>
      <div >
        <Window height={100} />
        <Door/>
        <Window height={100} />
      </div>
    </div>
  )
}

function Room2(props) {
  return (
    <div style={{border: "solid blue 1px", margin: "15px", display: "inline-block"}} >
      <h3>I am Room2</h3>
      <div >
        <Window height={80} />
        <Window height={120} />
        <Door/>
        <Window height={120} />
        <Window height={80} />
      </div>
    </div>
  )
}

function Foodbox(props) {
  return (
    <div style={{margin: "4px", backgroundColor: "#ddd"}} >
      I am {props.name}
    </div>
  )
}

function Kitchen() {
  const food_list = ["Apple Juice", "Paneer", "Paratha"]
  return (
    <div style={{border: "solid blue 1px", margin: "15px", display: "inline-block"}} >
      <h3>I am Kitchen</h3>
      <div>
        Food items:
      </div>
      <div>
        {food_list.map(food_name => <Foodbox name={food_name} />)}
      </div>
    </div>
  )
}

function MainFunc(props) {
  return (
    <div style={{border: "solid black 1px"}} >
      <Room1 />
      <Kitchen />
      <Room2 />
    </div>
  )
}
