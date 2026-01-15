import { useState, useEffect } from 'react'
import './App.css'
import Animals from './components/Animals'
import RegistrationForm from './components/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)
  const [showAnimals, setShowAnimals] = useState(true)
  const [users, setUsers] = useState([])
  const [usersLoading, setUsersLoading] = useState(false)

  // // componentDidMount
  // useEffect(() => {
  //   console.log('App component MOUNTED')
  // }, [])

  // // componentDidUpdate
  // useEffect(() => {
  //   console.log('App component UPDATED')
  // }, [count])

  // componentDidMount
  useEffect(() => {
    fetchUsers()
  }, [])

  // componentDidUpdate
  useEffect(() => {
    console.log('Users updated', users)
  }, [users])

  async function fetchUsers() {
    try {
      setUsersLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUsers(data)
      setUsersLoading(false)
    } catch(error) {
      console.log('Something went wrong', error)
      setUsersLoading(false)
    }
  }

  return (
    <>
      {/* <h1>Welcome to out app</h1>
      <p style={{ fontSize: '5em' }}>{count}</p>
      <button 
        onClick={() => setCount(count+1)}
      >INCREMENT</button>

      <button 
        onClick={() => setShowAnimals(!showAnimals)}
      >Toggle Animals component</button>
      {showAnimals && <Animals count={count} />}

      {usersLoading && 'Loading users ...'}
      <ul>
        {users.map(user => (
          <li>
            {user.name} | {user.email}
          </li>
        ))}
      </ul> */}

      <RegistrationForm />
    </>
  )
}

export default App


/*
  # Component Lifecycle:
    - A component goes through several phases during the render process
    - Component lifecycle phases:
      1. Mounting phase (Birth): 
        - Phase which occurs when the component renders for the very first time in the DOM
      2. Updating phase (Milestones)
        - Phase which occurs whenever a component re-renders (because of change in prop/state). There can be multiple updates to a component, hence a component can go through multiple "updating" phases
      3. Unmounting phase (Death)
        - Phase that occurs whenever a component is removed from the DOM (Eg.: routed to another page where the component does not exist, Conditionally removed, broswer webpage closed, etc.)
    - Component lifecycle methods:
      - Class based components
        1. componentDidMount(): (First cry)
          - Method that gets executed automatically after the component is mounted
          - Usecases: Making API calls, Setting inital values, etc.
        2. componentDidUpdate(): (Online post after milestone completion)
          - Method that gets executed automatically after the component is updated
          - Usecases: Updating a value based on new state and props, Validation, etc.
        3. componentWillUnmount(): (Last words)
          - Method that gets executed automatically just before the component is unmounted
          - Usecases: Cleanup form data, clear timeouts/interval, etc. 
      - Function based components:
        1. useEffect() with empty []: componentDidMount
          - Syntax:
            useEffect(() => {
              // Behave as componentDidMount
            }, [])
        2. useEffect() with state/props to track in []: componentDidUpdate
          - Syntax:
            useEffect(() => {
              // Behave as componentDidUpdate
            }, [state1, state2, prop1, prop2, ...])
        3. useEffect() return a callback within: componentWillUnmount
          - Syntax:
            useEffect(() => {
              return () => {
                // Behave as componentWillUnmount
              }
            }, [])

    - Human Lifecycle:
      - Birth (once)
      - Milestones (many)
      - Death (once)

    - Reference Image: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    # useEffect(): 
      - A single hook that can be used to replicate the behavious of all 3 lifecycle methods in functional components 
      - Syntax:
        useEffect(() => {
          // logic to execute
        }, []) // dependency array
*/