import { combineReducers } from 'redux'
import { initialState as initialStateLife, lifeReducer } from './life'

export const initialState = {
  life: initialStateLife,
}

export type TState = typeof initialState

export const appReducer = combineReducers({
  life: lifeReducer,
})
