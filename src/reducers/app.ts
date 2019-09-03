import { combineReducers } from 'redux'
import { lifeReducer } from './life'
import { venuesReducer } from './venues'
import { statusReducer } from './status'
import { initialState as initialStateLife } from '../../src/reducers/life'
import { initialState as initialStateStatus } from '../../src/reducers/status'
import { initialState as initialStateVenues } from '../../src/reducers/venues'

export const initialState = {
  life: initialStateLife,
  status: initialStateStatus,
  venues: initialStateVenues,
}

export type TState = typeof initialState

export const appReducer = combineReducers({
  life: lifeReducer,
  status: statusReducer,
  venues: venuesReducer,
})
