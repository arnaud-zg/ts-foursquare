import { combineReducers } from 'redux'
import { lifeReducer } from './life'
import { venuesReducer } from './venues'

export const appReducer = combineReducers({
  life: lifeReducer,
  venues: venuesReducer,
})
