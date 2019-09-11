import { combineReducers } from 'redux'
import { initialState as initialStateLife } from '../../src/reducers/life'
import { initialState as initialStateStatus } from '../../src/reducers/status'
import { initialState as initialStateVenues } from '../../src/reducers/venues'
import { lifeReducer } from './life'
import { statusReducer } from './status'
import { venuesReducer } from './venues'

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
