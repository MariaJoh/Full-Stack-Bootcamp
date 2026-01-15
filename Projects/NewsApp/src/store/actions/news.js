// Action type constants
export const FETCH_NEWS_LOADING = 'FETCH_NEWS_LOADING'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAILED = 'FETCH_NEWS_FAILED'

// Action creators: Functions which return action objects
export const fetchNewsLoading = (value) => ({
  type: FETCH_NEWS_LOADING
})

export const fetchNewsSuccess = (articles) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: articles
})

export const fetchNewsFailed = (errorMessage) => ({
  type: FETCH_NEWS_FAILED,
  payload: errorMessage
})

export const fetchNews = (category = 'general') => {
  return async (dispatch) => {
    try {
      dispatch(fetchNewsLoading())

      const API_KEY = import.meta.env.VITE_NEWS_API_KEY
      const API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}&category=${category}`

      const res = await fetch(API_URL)
      const data = await res.json()
      dispatch(fetchNewsSuccess(data.articles))
    } catch(error) {
      dispatch(fetchNewsFailed(error.message))
    }
  }
}