import { combineReducers } from 'redux'
import { initialState as initialStateLife, lifeReducer } from './life'
import { initialState as initialStateLists, listsReducer } from './lists'
import { initialState as initialStatePhotos, photosReducer } from './photos'
import { initialState as initialStateRequest, requestReducer } from './request'
import { initialState as initialStateStatus, statusReducer } from './status'
import { initialState as initialStateVenues, venuesReducer } from './venues'

export const initialState = {
  life: initialStateLife,
  lists: initialStateLists,
  photos: initialStatePhotos,
  request: initialStateRequest,
  status: initialStateStatus,
  venues: initialStateVenues,
}

export type TState = typeof initialState

export const appReducer = combineReducers({
  life: lifeReducer,
  lists: listsReducer,
  photos: photosReducer,
  request: requestReducer,
  status: statusReducer,
  venues: venuesReducer,
})
