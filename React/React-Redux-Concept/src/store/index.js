import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { thunk } from 'redux-thunk'
import countReducer from './reducers/counter'
import userReducer from './reducers/user'
import productsReducer from './reducers/products'
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  counter: countReducer,
  user: userReducer,
  products: productsReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store