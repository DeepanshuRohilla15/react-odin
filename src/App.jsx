 /* function List(props)
{

  if(!props.animals)
  {
    return <div>Loading...</div>
  }

  if(props.animals.length === 0)
  {
    return <div>There are no animals!</div>
  }
  return (
    <ul>
      {props.animals.map((animal) => {
          return animal.startsWith("L") && <li key={animal}>{animal}</li>
      })}
    </ul>
  )
}




function TodoList() {

  const todos = [
    {task: "go to gym", id: crypto.randomUUID()},
    {task: "go to bed", id: crypto.randomUUID()},
    {task: "feed the cat", id: crypto.randomUUID()}
  ];
  // const animals = ["Lion", "Tiger", "Leopard", "LIzrd"]

  return (
    // <div>
    //   <h1>Animals</h1>
    //   <List animals={animals} />
    // </div>
    <div>
        <ul>
      {todos.map((todo) => {
          <li key={todo.id}>{todo.task}</li>
      })}
    </ul>
    </div>
    
  )
}



function Button(props){
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + 'px'
  }

  return (
    <button style={buttonStyle}>{props.text}</button>
  )
}

*/

import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}
    </div>
  );
}

export default App;

