import { 
  UPDATE_NAME, 
  UPDATE_EMAIL,
  UPDATE_BATCH 
} from '../actions/user'

const initialState = {
  name: 'Madeline',
  email: 'm@gmail.com',
  batch: 3
}

function userReducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      }
    case UPDATE_EMAIL:
      return {
        ...state,
        email:  action.payload
      }
    case UPDATE_BATCH:
      return {
        ...state,
        batch:  action.payload
      }
    default:
      return state
  }
}

export default userReducer