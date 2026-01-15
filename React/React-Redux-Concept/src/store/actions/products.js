// Action type constants
export const FETCH_PRODUCTS_LOADING = 'FETCH_PRODUCTS_LOADING'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED'

// Action creators: Functions which return action objects
export const fetchProductLoading = (value) => ({
  type: FETCH_PRODUCTS_LOADING
})

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
})

export const fetchProductFailed = (errorMessage) => ({
  type: FETCH_PRODUCTS_FAILED,
  payload: errorMessage
})

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchProductLoading())
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      dispatch(fetchProductsSuccess(data.products))
    } catch(error) {
      dispatch(fetchProductFailed(error.message))
    }
  }
}