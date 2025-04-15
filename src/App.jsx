function List(props)
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


function App() {

  const animals = ["Lion", "Tiger", "Leopard", "LIzrd"]

  return (
    <div>
      <h1>Animals</h1>
      <List animals={animals} />
    </div>
  )
}

export default App
