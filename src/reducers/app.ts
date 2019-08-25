import { combineReducers } from 'redux'
import { lifeReducer } from './life'
import { venuesReducer } from './venues'
import { initialState as initialStateLife } from '../../src/reducers/life'
import { initialState as initialStateVenues } from '../../src/reducers/venues'

export const initialState = {
  life: initialStateLife,
  venues: initialStateVenues,
}

export type TState = typeof initialState

export const appReducer = combineReducers({
  life: lifeReducer,
  venues: venuesReducer,
})
