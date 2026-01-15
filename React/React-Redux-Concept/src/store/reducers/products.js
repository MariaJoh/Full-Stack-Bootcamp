import { 
  FETCH_PRODUCTS_LOADING, 
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED
} from '../actions/products'

const initialState = {
  loading: false,
  data: [],
  error: null
}

function productsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    case FETCH_PRODUCTS_FAILED: 
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default productsReducer