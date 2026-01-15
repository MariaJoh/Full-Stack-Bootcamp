// Action type constants
export const UPDATE_NAME = 'UPDATE_NAME'
export const UPDATE_EMAIL = 'UPDATE_EMAIL'
export const UPDATE_BATCH = 'UPDATE_BATCH'

// Action creators: Functions which return action objects
export const updateName = (value) => ({
  type: UPDATE_NAME,
  payload: value
})

export const updateEmail = (value) => ({
  type: UPDATE_EMAIL,
  payload: value
})

export const updateBatch = (value) => ({
  type: UPDATE_BATCH,
  payload: Number(value)
})