import { useState } from 'react'
import './App.css'

function App() {
  // function showAlert() {
  //   alert('Hi')
  // }

  // function showNumberAlert(num) {
  //   alert(num)
  // }

  let [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function increment5() {
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <>
      {/* <input type="text" onInput={showAlert} />
      <button onClick={showAlert}>Show alert</button>
      <button onClick={() => showNumberAlert(5)}>Show number alert</button> */}

      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={increment5}>Increment 5</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App

/*
  # Event Handling:
    - Logic to execute when a specific event occurs
    - Syntax:
      <button onClick={test}>Test</button>
      <button onClick={() => test()}>Test</button>

  # State ***
    - Data that belongs to that component
    - Component will only re-render if the state was changed using stateHandler
      - stateHandler are asynchronous in nature
    - Syntax:
      - Declare: const [state, stateHandler] = useState(defaultValue)

  # Hooks: Special functions provided by React to perform a specific task
    - useState(): Declare state in a functional component
*/