import { 
  FETCH_NEWS_LOADING, 
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAILED
} from '../actions/news'

const initialState = {
  loading: false,
  articles: [],
  error: null
}

function newsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NEWS_LOADING:
      return {
        ...state,
        loading: true
      }
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload
      }
    case FETCH_NEWS_FAILED: 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default newsReducer