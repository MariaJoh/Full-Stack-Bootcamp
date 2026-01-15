// Action type constants
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// Action creators: Functions which return action objects
export const increment = (value = 1) => ({
  type: INCREMENT,
  payload: value
})

export const decrement = () => ({
  type: DECREMENT
})