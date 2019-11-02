import { createReducer, getType } from 'typesafe-actions'
import { NPhotosState } from '../../types'
import { getPhotosDetailsAsync, TPhotosAction } from '../actions'

export const initialState: NPhotosState.IState = {
  entities: {},
}

export const photosReducer = createReducer<NPhotosState.IState, TPhotosAction>(
  initialState
).handleAction(
  getType(getPhotosDetailsAsync.success),
  (state, action): NPhotosState.IState => {
    return {
      ...state,
      entities: {
        ...state.entities,
        [action.payload.id]: action.payload,
      },
    }
  }
)
