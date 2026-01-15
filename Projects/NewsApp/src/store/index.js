import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import newsReducer from './reducers/news';

const rootReducer = combineReducers({
  news: newsReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store