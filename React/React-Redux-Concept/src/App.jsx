import './App.css'
import { Provider } from 'react-redux'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import User from './components/User'
import Products from './components/Products'
import store from './store'

const containerStyle= {
  border: '1px solid black',
  textAlign: 'center',
  padding: '1em',
  margin: '1em'
}

function App() {
  return (
    <Provider store={store}>
      <div style={containerStyle}>
        <div style={{ display: 'flex' }}>
          <Child1 />
          <Child2 />
        </div>
        <User />
        <Products />
      </div>
    </Provider>
  )
}

export default App

/*
# Redux: Architecture + Flow
  - ARCHITECTURE
    - Redux Store: Contains multiple reducer functions
    - Reducer function: State, Logic to update the state
    - Action object: type (name), payload (data)
      - "Dispatch action": Perform that specific state update as mentioned in the reducer function

  - FLOW
    1. Components which need access to central state "SUBSCRIBE to that state"
    2. Event handlers "DISPATCH the ACTION objects" to cause state updates as per the logic in reducer function

  - Illustrations:
    - src/assets
    - https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif

  - Setup
    1. React app [DONE]
    2. Install redux and react-redux [DONE]
    3. Setup redux store (w/ reducer functions) [DONE]
    4. Connecting react with redux, flow:
      - "Provider" component wrapper + "store" prop
      - Components subscribe to state (useSelector)
      - Components dispatch actions (useDispatch)

  - Additional notes:
    - [import store from './store/index'] can also be minimized as [import store from './store']

  # Redux Thunk
    - Middleware for redux
    - Handle async tasks
    - In simple redux: disptach() can only dispatch action "objects"
    - In redux-thunk: dispatch() can have functions as arguments, those functions further have access to "state" and "dispatch" using which it can dispatch other actions after async operations
*/