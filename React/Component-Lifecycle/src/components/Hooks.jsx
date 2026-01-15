import { useState } from 'react'

function Hooks(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      
    </div>
  );
}

export default Hooks;

/*
  # Hooks:
    - Introduced in: Version 16.8
    - Major reason: Create and manage states in functional components
      - Before v16.8: States could only be created in Class based components
      - After v16.8: States could now be created in functional components

    1. useState ***: Declare state and state handler in functional components
      - Syntax: const [state, stateHandler] = useState(default)
      - Returns an array with first element as the state, and second element as teh state handler
    2. useEffect ***: Replicate all 3 component lifecycle methods 
      - Syntax: useEffect(() => {}, [])
      - Invoked automatically depending on declaration (componentDidMount, componentDidUpdate, componentWillUnmount)
    3. useRef: Create a reference for uncontrolled components
      - Syntax: const ref1 = useRef()
*/