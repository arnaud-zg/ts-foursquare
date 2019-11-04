import { createReducer } from 'typesafe-actions'
import { NListsState } from '../../types'
import { getListsAsync, TListsAction } from '../actions'

export const initialState: NListsState.IState = {
  entities: {},
}

export const listsReducer = createReducer<NListsState.IState, TListsAction>(
  initialState
).handleAction(
  getListsAsync.success,
  (state, action): NListsState.IState => {
    return {
      ...state,
      entities: {
        ...state.entities,
        [action.payload.id]: action.payload,
      },
    }
  }
)
