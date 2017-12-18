import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  fortuneRequest: [],
  fortuneSuccess: ['fortune'],
  fortuneFailure: null
})

export const FortuneTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fortune: null,
  fetching: null,
  error: null
})

/* ------------- Reducers ------------- */

export const request = (state, { username }) => {
  return state.merge({ fetching: true, fortune: null })
}

export const success = (state, action) => {
  const { fortune } = action
  return state.merge({ fetching: false, error: null, fortune: fortune })
}

export const failure = (state) =>
  state.merge({ fetching: false, error: true, fortune: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FORTUNE_REQUEST]: request,
  [Types.FORTUNE_SUCCESS]: success,
  [Types.FORTUNE_FAILURE]: failure
})
