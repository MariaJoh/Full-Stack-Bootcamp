import './App.css'
import Uncontrolled from './components/Uncontrolled'
import Controlled from './components/Controlled'

function App() {
  return (
    <>
      {/* <Uncontrolled /> */}
      {/* <Controlled /> */}
    </>
  )
}

export default App


/*
  # Form Handling:
    - Controlled Component: 
      - Sync the form element data with react state whenever the data updates
      - React state becomes the single source of truth
      - Steps:
        1. Create state for each form element, assign state to value prop
          - value =  state
        2. Update state (using stateHandler) whenever form data updates
          - eventHandler -> stateHandler
    - Uncontrolled Component:
      - React fetches the value whenever needed instead of syncing
      - Steps:
        1. Create a reference using the 'ref' (reference) prop
        2. To get access to that reference, use the useRef hook
      - Example: File input needs to be handled via uncontrolled ref

*/