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
*/

function Button(props){
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + 'px'
  }

  return (
    <button style={buttonStyle}>{props.text}</button>
  )
}

export default function App(){
  return (
    <div>
      <Button text="Click me!"  color="blue" fontSize={12} />
      <Button text="dont click me" color="red" fontSize={14}  />
      <Button text="click me" color="green"  fontSize={20} />
    </div>
  )
}