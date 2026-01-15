import { 
  INCREMENT, 
  DECREMENT 
} from '../actions/counter'

const initialState = {
  count: 0
}

function countReducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

export default countReducer